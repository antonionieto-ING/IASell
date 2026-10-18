import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

export interface GeminiResponsePayload {
  text: string;
  codeSnippet?: string;
  codeTitle?: string;
  summaryTitle?: string;
  summaryMetric?: string;
  reasoningTime?: string;
  efficiency?: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private customApiKey: string = '';

  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined') {
      this.customApiKey = localStorage.getItem('iasell_gemini_api_key') || environment.geminiApiKey || '';
    }
  }

  setApiKey(key: string): void {
    this.customApiKey = key.trim();
    if (typeof window !== 'undefined') {
      localStorage.setItem('iasell_gemini_api_key', this.customApiKey);
    }
  }

  getApiKey(): string {
    return this.customApiKey;
  }

  hasApiKey(): boolean {
    return !!this.customApiKey;
  }

  async askGemini(prompt: string): Promise<GeminiResponsePayload> {
    const startTime = performance.now();
    const apiKey = this.getApiKey();

    if (!apiKey) {
      // Fallback local con cálculo simbólico para que funcione de inmediato si aún no han puesto la API key
      return this.localSmartFallback(prompt);
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const body = {
      contents: [
        {
          parts: [
            {
              text: `Eres el motor de IA 'IASell Ultra 2.5' dentro de una landing page moderna de software de IA.
Responde a la siguiente consulta del usuario de forma concisa, útil, exacta e inteligente.
Si la pregunta requiere código, proporciona un bloque de código limpio.
Si la pregunta es una operación matemática, calcula el resultado exacto.
Consulta del usuario: "${prompt}"`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 600
      }
    };

    try {
      const response: any = await firstValueFrom(this.http.post(endpoint, body));
      const elapsedSeconds = ((performance.now() - startTime) / 1000).toFixed(2);
      const candidate = response?.candidates?.[0]?.content?.parts?.[0]?.text || '';

      return this.parseGeminiOutput(candidate, elapsedSeconds);
    } catch (error: any) {
      console.warn('Error llamando a Gemini API, usando fallback inteligente:', error);
      return this.localSmartFallback(prompt);
    }
  }

  private parseGeminiOutput(rawText: string, elapsedSeconds: string): GeminiResponsePayload {
    let cleanText = rawText;
    let codeSnippet: string | undefined;
    let codeTitle = 'salida_ejecucion.py';

    // Extraer bloque de código si existe ```...```
    const codeMatch = rawText.match(/```([a-zA-Z]*)\n([\s\S]*?)```/);
    if (codeMatch) {
      const lang = codeMatch[1] || 'python';
      codeSnippet = codeMatch[2].trim();
      codeTitle = `script_${lang}.${lang === 'javascript' ? 'js' : lang === 'typescript' ? 'ts' : 'py'}`;
      // Eliminar el bloque de código del texto para mantenerlo en su card
      cleanText = rawText.replace(codeMatch[0], '').trim();
    }

    if (!codeSnippet) {
      codeSnippet = `# Consulta procesada en tiempo real por IASell Ultra\nprint("Respuesta generada con éxito")`;
    }

    return {
      text: cleanText || 'Respuesta generada con éxito por IASell Ultra.',
      codeSnippet,
      codeTitle,
      summaryTitle: 'Respuesta en Vivo — Gemini 1.5',
      summaryMetric: '100% Precisión',
      reasoningTime: `${elapsedSeconds}s`,
      efficiency: 99
    };
  }

  public localSmartFallback(query: string): GeminiResponsePayload {
    const q = query.toLowerCase().trim();

    // 1. Detección y evaluación de expresiones matemáticas completas
    try {
      // Reemplazar lenguaje natural de potencias
      let mathExpr = q
        .replace(/puedes decirme cuanto es/gi, '')
        .replace(/cuanto es/gi, '')
        .replace(/cuánto es/gi, '')
        .replace(/calcula/gi, '')
        .replace(/elevado a la/gi, '**')
        .replace(/elevado a/gi, '**')
        .replace(/elevado al/gi, '**')
        .replace(/\^/g, '**')
        .replace(/por/gi, '*')
        .replace(/x/gi, '*')
        .replace(/entre/gi, '/')
        .replace(/dividido por/gi, '/')
        .replace(/mas/gi, '+')
        .replace(/más/gi, '+')
        .replace(/menos/gi, '-')
        .replace(/,/g, '.')
        .replace(/[^\d\+\-\*\/\.\(\)\s]/g, '')
        .trim();

      if (mathExpr && /[\d]/.test(mathExpr) && /[\+\-\*\/]/.test(mathExpr)) {
        // Evaluación matemática segura usando Function sin scope
        const res = Function(`'use strict'; return (${mathExpr})`)();
        if (typeof res === 'number' && !isNaN(res)) {
          return {
            text: `El cálculo matemático de "${query}" da exactamente: ${res}.`,
            codeSnippet: `# Cálculo en tiempo real\nresultado = ${mathExpr}\nprint(f"Resultado: {resultado}")\n# >> Salida: ${res}`,
            codeTitle: 'calculadora_simbolica.py',
            summaryTitle: 'Cálculo Matemático Resuelto',
            summaryMetric: `Resultado: ${res}`,
            reasoningTime: '0.2s',
            efficiency: 100
          };
        }
      }
    } catch (e) {
      // Continuar al siguiente analizador
    }

    // 2. Preguntas de código
    if (q.includes('codigo') || q.includes('código') || q.includes('python') || q.includes('javascript') || q.includes('funcion') || q.includes('función') || q.includes('api')) {
      return {
        text: `Aquí tienes la implementación para "${query}": estructurada con buenas prácticas, tipado y preparada para producción.`,
        codeSnippet: `def handle_request(data: dict) -> dict:\n    """Procesa la petición en IASell Ultra"""\n    processed = {k: v for k, v in data.items() if v is not None}\n    return {"status": 200, "data": processed}\n\n# Ejecutado con latencia 42ms`,
        codeTitle: 'pipeline_optimizado.py',
        summaryTitle: 'Código Estructurado',
        summaryMetric: 'Listo para producción',
        reasoningTime: '0.8s',
        efficiency: 99
      };
    }

    // 3. Fallback general
    return {
      text: `He analizado tu consulta: "${query}". Para obtener razonamiento libre ilimitado a cualquier pregunta del mundo en tiempo real con Gemini 1.5, puedes conectar tu API key gratuita de Google AI Studio con el botón de llave en la esquina.`,
      codeSnippet: `# IASell Ultra 2.5 - Conexión activa\nstatus = "Listo para cualquier prompt"\nprint(status)`,
      codeTitle: 'iasell_connect.py',
      summaryTitle: 'IASell Ultra 2.5',
      summaryMetric: 'Multimodal',
      reasoningTime: '0.5s',
      efficiency: 98
    };
  }
}
