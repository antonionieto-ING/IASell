import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { GeminiService, GeminiResponsePayload } from '../../services/gemini.service';

interface ChatMessage {
  id: string;
  sender: 'user' | 'model';
  time: string;
  text?: string;
  files?: { name: string; size?: string; type: 'pdf' | 'csv' | 'code' }[];
  reasoningTime?: string;
  pagesIndexed?: string;
  tokensProcessed?: string;
  summaryTitle?: string;
  summaryMetric?: string;
  summaryBody?: string;
  codeSnippet?: string;
  codeTitle?: string;
  efficiency?: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  template: `
    <section class="relative w-full pt-10 pb-20 overflow-hidden bg-gradient-to-b from-surface via-white to-surface">
      <!-- Glow ambient backdrop -->
      <div class="gemini-glow absolute inset-0 -top-20 pointer-events-none z-0"></div>
      <div class="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <!-- Floating Pill Badge -->
        <div appScrollAnimate class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border-subtle shadow-sm mb-6 hover:border-google-blue hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-google-blue"></span>
          </span>
          <span class="font-sans text-xs font-semibold text-on-surface tracking-tight group-hover:text-google-blue transition-colors">Nueva Generación Multimodal v3.4</span>
          <span class="text-xs text-secondary-text font-normal">• 2M Ventana de contexto</span>
        </div>

        <!-- Headline -->
        <h1 appScrollAnimate class="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight max-w-4xl leading-[1.12] mb-6">
          Inteligencia que expande tus ideas, tu trabajo y tu <span class="gemini-gradient-text">creatividad.</span>
        </h1>

        <!-- Subtitle -->
        <p appScrollAnimate class="font-body text-base sm:text-lg lg:text-xl text-secondary-text max-w-2xl mx-auto leading-relaxed mb-8">
          Accede al modelo de IA más potente de IASell. Razonamiento complejo, análisis de documentos masivos, generación visual fotorrealista y automatización de tareas en un solo lugar.
        </p>

        <!-- CTAs -->
        <div appScrollAnimate class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-6">
          <!-- Boton Azul Destacado con resplandor y elevacion -->
          <a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-google-blue hover:bg-google-blue-hover text-white font-sans font-semibold text-base shadow-md hover:shadow-xl hover:shadow-google-blue/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group" href="#precios">
            <span class="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform duration-300" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
            <span>Comenzar con tu primer modelo</span>
          </a>
          <!-- Boton Secundario con borde y sombreado -->
          <a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-surface-variant text-on-surface font-sans font-medium text-base border border-border-subtle hover:border-google-blue/50 shadow-sm hover:shadow-md hover:text-google-blue transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group" href="#modelos">
            <span class="material-symbols-outlined text-[20px] text-google-blue group-hover:scale-110 transition-transform duration-300">play_circle</span>
            <span>Ver capacidades en vivo</span>
          </a>
        </div>

        <!-- Trust Sub-badge -->
        <p appScrollAnimate class="text-xs sm:text-sm text-secondary-text flex items-center justify-center flex-wrap gap-2 mb-14">
          <span class="inline-flex items-center gap-1 font-medium text-on-surface">
            <span class="material-symbols-outlined text-[16px] text-google-green">check</span> Cancela cuando quieras
          </span>
          <span class="text-border-subtle">•</span>
          <span>Modelos IASell Ultra &amp; Flash incluidos</span>
          <span class="text-border-subtle">•</span>
          <span>Sin permanencia</span>
        </p>

        <!-- HERO PRODUCT WORKSPACE SHOWCASE (Interactive Live Multimodal Studio) -->
        <div appScrollAnimate class="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-border-subtle/80 shadow-[0_20px_60px_-15px_rgba(26,115,232,0.1)] hover:shadow-[0_25px_70px_-15px_rgba(26,115,232,0.2)] hover:border-google-blue/30 transition-all duration-500 overflow-hidden text-left font-body">
          <!-- Top Window Header Bar -->
          <div class="bg-surface-variant/80 border-b border-border-subtle px-5 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#ea4335]/70 hover:bg-[#ea4335] transition-colors cursor-pointer inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-[#fbbc04]/70 hover:bg-[#fbbc04] transition-colors cursor-pointer inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-[#34a853]/70 hover:bg-[#34a853] transition-colors cursor-pointer inline-block"></span>
              <span class="ml-3 font-sans text-xs font-semibold text-secondary-text flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-google-blue"></span> IASell Studio Pro — Demo en vivo
              </span>
            </div>
            <!-- Model Switcher Pill in Header -->
            <div class="flex items-center gap-2">
              <button
                (click)="toggleKeyModal()"
                [title]="geminiService.hasApiKey() ? 'API Key conectada (Haz clic para cambiar)' : 'Haz clic para conectar tu API Key de Gemini gratis'"
                class="inline-flex items-center gap-1 text-xs font-sans font-semibold px-2.5 py-1 rounded-full border shadow-sm transition-all"
                [ngClass]="geminiService.hasApiKey() ? 'bg-green-50 text-green-700 border-green-200' : 'bg-white border-border-subtle text-google-blue hover:border-google-blue'"
              >
                <span class="material-symbols-outlined text-[14px]">{{ geminiService.hasApiKey() ? 'check_circle' : 'key' }}</span>
                <span>{{ geminiService.hasApiKey() ? 'Gemini 1.5 Activo' : 'Conectar API Key' }}</span>
              </button>
              <span class="text-xs font-sans font-medium px-2 py-0.5 rounded border border-google-blue/20 bg-google-blue/5 text-google-blue hidden sm:inline">
                {{ userMessagesCount }}/2 mensajes de prueba
              </span>
            </div>
          </div>

          <!-- Studio Body with Interactive Stream -->
          <div class="p-6 sm:p-8 space-y-6">
            @for (msg of messages; track msg.id) {
              <!-- USER MESSAGE -->
              @if (msg.sender === 'user') {
                <div class="bg-surface rounded-2xl p-4 sm:p-5 border border-border-subtle hover:border-border-subtle/80 hover:shadow-sm transition-all animate-fadeIn">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full bg-on-surface text-white flex items-center justify-center font-sans font-bold text-xs shrink-0 shadow">
                      TÚ
                    </div>
                    <div class="flex-1 space-y-2">
                      <div class="flex items-center justify-between">
                        <p class="font-medium text-on-surface text-sm sm:text-base leading-relaxed">
                          "{{ msg.text }}"
                        </p>
                        <span class="text-xs text-secondary-text shrink-0 ml-2">{{ msg.time }}</span>
                      </div>
                      @if (msg.files && msg.files.length > 0) {
                        <div class="flex flex-wrap items-center gap-2 text-xs pt-1">
                          @for (file of msg.files; track file.name) {
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-border-subtle text-on-surface font-medium">
                              <span class="material-symbols-outlined text-[16px]" [ngClass]="file.type === 'pdf' ? 'text-google-red' : 'text-google-green'">
                                {{ file.type === 'pdf' ? 'picture_as_pdf' : 'table_chart' }}
                              </span>
                              {{ file.name }} <span *ngIf="file.size" class="text-secondary-text">({{ file.size }})</span>
                            </span>
                          }
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }

              <!-- MODEL RESPONSE -->
              @if (msg.sender === 'model') {
                <div class="flex items-start gap-3 animate-fadeIn">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-google-blue via-purple-600 to-google-red p-[1.5px] shrink-0 shadow-sm">
                    <div class="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <span class="material-symbols-outlined text-google-blue text-[18px]" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
                    </div>
                  </div>
                  <div class="flex-1 space-y-4">
                    <!-- Status & Reasoning Pill -->
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-google-blue/10 text-google-blue text-xs font-sans font-semibold">
                        <span class="material-symbols-outlined text-[14px]">psychology</span> Razonamiento profundo ({{ msg.reasoningTime || '1.4s' }})
                      </span>
                      <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 text-google-green text-xs font-sans font-medium border border-green-200">
                        <span class="material-symbols-outlined text-[14px]">task_alt</span> {{ msg.pagesIndexed || '100% completado' }}
                      </span>
                      <span class="text-xs text-secondary-text font-mono">{{ msg.tokensProcessed || '850K tokens procesados' }}</span>
                    </div>

                    <!-- Structured Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <!-- Summary / Insight Card -->
                      <div class="bg-surface rounded-2xl p-4 border border-border-subtle space-y-2.5 hover:border-google-blue/30 transition-colors">
                        <div class="flex items-center justify-between">
                          <span class="font-sans font-semibold text-xs uppercase tracking-wider text-google-blue">{{ msg.summaryTitle || 'Análisis Completado' }}</span>
                          <span class="text-xs font-mono text-google-green font-bold">{{ msg.summaryMetric || '+28.4% YoY' }}</span>
                        </div>
                        <p class="text-xs sm:text-sm text-secondary-text leading-relaxed whitespace-pre-wrap">
                          {{ msg.summaryBody }}
                        </p>
                        <div class="w-full bg-white rounded-xl p-2.5 border border-border-subtle">
                          <div class="flex justify-between text-[11px] font-sans font-medium text-secondary-text mb-1">
                            <span>Precisión &amp; Coherencia</span>
                            <span class="text-on-surface font-semibold">{{ msg.efficiency || 96 }}%</span>
                          </div>
                          <div class="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
                            <div class="bg-gradient-to-r from-google-blue to-google-green h-full rounded-full" [style.width.%]="msg.efficiency || 96"></div>
                          </div>
                        </div>
                      </div>

                      <!-- Python Code / Model Logic Preview -->
                      <div class="bg-[#1e2022] text-gray-100 rounded-2xl p-4 border border-gray-700 space-y-2">
                        <div class="flex items-center justify-between text-xs text-gray-400 font-mono">
                          <span class="flex items-center gap-1 text-[#4285f4]"><span class="material-symbols-outlined text-[14px]">code</span> {{ msg.codeTitle || 'script_solucion.py' }}</span>
                          <span>Ejecutado con éxito ✓</span>
                        </div>
                        <pre class="font-mono text-[11px] leading-5 text-gray-300 overflow-x-auto whitespace-pre-wrap">{{ msg.codeSnippet }}</pre>
                      </div>
                    </div>

                    <!-- Instant Action Trigger -->
                    <div class="bg-gradient-to-r from-blue-50/60 via-purple-50/40 to-transparent p-3.5 rounded-xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <span class="text-on-surface font-medium">Respuesta lista para transferir a tus proyectos o flujo de trabajo.</span>
                      <div class="flex items-center gap-2">
                        <button (click)="copyAction()" class="px-3.5 py-1.5 rounded-lg bg-white border border-border-subtle hover:border-google-blue/40 hover:bg-surface font-semibold text-on-surface hover:text-google-blue transition-all shadow-sm hover:shadow inline-flex items-center gap-1 active:scale-95">
                          <span class="material-symbols-outlined text-[15px]">content_copy</span> {{ copyBtnText }}
                        </button>
                        <a href="#precios" class="px-3.5 py-1.5 rounded-lg bg-google-blue text-white font-semibold hover:bg-google-blue-hover transition-all shadow-sm hover:shadow hover:shadow-google-blue/30 inline-flex items-center gap-1 transform hover:-translate-y-0.5 active:scale-95">
                          <span class="material-symbols-outlined text-[15px]">rocket_launch</span> Desbloquear completo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
            }

            <!-- THINKING ANIMATION IF PROCESSING -->
            @if (isThinking) {
              <div class="flex items-start gap-3 animate-fadeIn">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-google-blue via-purple-600 to-google-red p-[1.5px] shrink-0 animate-pulse">
                  <div class="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined text-google-blue text-[18px]">auto_awesome</span>
                  </div>
                </div>
                <div class="bg-surface rounded-2xl p-4 border border-google-blue/30 flex items-center gap-3">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-google-blue"></span>
                  </span>
                  <span class="text-sm font-sans text-secondary-text font-medium">IASell Ultra (Gemini 1.5) está procesando tu respuesta en vivo...</span>
                </div>
              </div>
            }

            <!-- LIMIT REACHED NOTIFICATION BANNER -->
            @if (userMessagesCount >= 2) {
              <div class="p-4 rounded-2xl bg-gradient-to-r from-google-blue/10 via-purple-500/10 to-transparent border border-google-blue/20 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[24px]">verified</span>
                  <div>
                    <p class="font-sans font-semibold text-sm text-on-surface">Has completado los 2 mensajes de prueba gratuita en vivo.</p>
                    <p class="text-xs text-secondary-text">Únete con tu cupón de bienvenida para disfrutar de consultas ilimitadas con IASell Ultra.</p>
                  </div>
                </div>
                <a href="#precios" class="shrink-0 px-4 py-2 rounded-full bg-google-blue text-white font-sans text-xs font-semibold hover:bg-google-blue-hover shadow-md transition-all">
                  Obtener descuento ahora
                </a>
              </div>
            }

            <!-- Bottom Floating Prompt Bar (Interactive input) -->
            <div class="pt-2">
              <form (submit)="sendMessage($event)" class="relative bg-surface rounded-2xl border border-border-subtle focus-within:border-google-blue/70 focus-within:ring-2 focus-within:ring-google-blue/10 p-2.5 flex items-center gap-3 shadow-inner transition-all">
                <button type="button" (click)="toggleKeyModal()" class="p-2 rounded-xl hover:bg-white hover:text-google-blue text-secondary-text transition-all hover:scale-110 active:scale-95" title="Configurar API Key">
                  <span class="material-symbols-outlined text-[20px]">key</span>
                </button>
                <input
                  [(ngModel)]="userInput"
                  name="userInput"
                  [disabled]="isThinking || userMessagesCount >= 2"
                  class="w-full bg-transparent text-sm text-on-surface placeholder-secondary-text focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  [placeholder]="userMessagesCount >= 2 ? 'Límite de prueba alcanzado (2/2). Obtén acceso completo abajo.' : 'Pregunta cualquier cosa en el mundo a la IA (2 mensajes gratis)...'"
                  type="text"
                />
                <div class="flex items-center gap-2 pr-1">
                  <span class="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans text-secondary-text bg-white px-2 py-1 rounded-md border border-border-subtle hover:border-google-blue/30 transition-colors">
                    <span class="material-symbols-outlined text-[13px]">mic</span> Voz
                  </span>
                  <button
                    type="submit"
                    [disabled]="!userInput.trim() || isThinking || userMessagesCount >= 2"
                    class="w-9 h-9 rounded-xl bg-google-blue text-white flex items-center justify-center hover:bg-google-blue-hover hover:scale-105 active:scale-95 transition-all shadow hover:shadow-md hover:shadow-google-blue/30 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    <span class="material-symbols-outlined text-[18px]">arrow_upward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Optional API Key Modal -->
      @if (showKeyModal) {
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-border-subtle space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-google-blue">key</span>
                <h3 class="font-sans font-bold text-base text-on-surface">Conectar Gemini API Gratis</h3>
              </div>
              <button (click)="toggleKeyModal()" class="text-secondary-text hover:text-on-surface">
                <span class="material-symbols-outlined">close</span>
              </button>
            </div>
            <p class="text-xs text-secondary-text leading-relaxed">
              Introduce una API key gratuita de Google AI Studio para que el chat responda en tiempo real a <strong>cualquier pregunta libre del mundo</strong> con Gemini 1.5. Si no introduces ninguna, se usará el motor inteligente integrado.
            </p>
            <input
              type="password"
              [(ngModel)]="tempApiKey"
              placeholder="AIzaSy..."
              class="w-full px-3 py-2 text-sm border rounded-xl border-border-subtle focus:outline-none focus:border-google-blue"
            />
            <div class="flex items-center justify-between pt-2">
              <a href="https://aistudio.google.com/app/apikey" target="_blank" class="text-xs text-google-blue hover:underline inline-flex items-center gap-0.5">
                Obtener clave gratis en Google <span class="text-[12px]">↗</span>
              </a>
              <button (click)="saveApiKey()" class="px-4 py-2 bg-google-blue text-white rounded-full font-semibold text-xs hover:bg-google-blue-hover">
                Guardar y Activar
              </button>
            </div>
          </div>
        </div>
      }
    </section>
  `
})
export class HeroComponent {
  copyBtnText = 'Copiar texto';
  userInput = '';
  isThinking = false;
  userMessagesCount = 0;
  showKeyModal = false;
  tempApiKey = '';

  constructor(public geminiService: GeminiService) {
    this.tempApiKey = this.geminiService.getApiKey();
  }

  messages: ChatMessage[] = [
    {
      id: 'init-1',
      sender: 'user',
      time: 'Hace 2 min',
      text: 'Analiza este balance financiero de 80 páginas, genera un resumen ejecutivo y redacta la propuesta comercial en tono persuasivo con proyección a 3 años.',
      files: [
        { name: 'informe_q3_consolidado.pdf', size: '14.2 MB', type: 'pdf' },
        { name: 'metricas_ebitda_2025.csv', size: '', type: 'csv' }
      ]
    },
    {
      id: 'init-2',
      sender: 'model',
      time: 'Hace 1 min',
      reasoningTime: '1.8s',
      pagesIndexed: '80 páginas indexadas',
      tokensProcessed: '1.2M tokens procesados',
      summaryTitle: '1. Resumen Ejecutivo Clave',
      summaryMetric: '+28.4% YoY',
      summaryBody: 'El margen neto subió de 14.2% a 19.8% impulsado por optimización operativa. Se identificó una oportunidad inmediata de ahorro de €140,000 anuales en licencias redundantes.',
      efficiency: 94,
      codeTitle: 'montecarlo_simulation.py',
      codeSnippet: `import numpy as np
# Simulación de crecimiento a 3 años
arr_q4 = np.array([120000, 145000, 182000])
cagr_expected = (1.34 ** (1/3) - 1) * 100
print(f"ROI proyectado: {cagr_expected:.2f}%")
# >> Salida: ROI proyectado: 10.25% mensual`
    }
  ];

  async sendMessage(event: Event): Promise<void> {
    event.preventDefault();
    const query = this.userInput.trim();
    if (!query || this.isThinking || this.userMessagesCount >= 2) return;

    this.userMessagesCount++;
    const userMsgId = 'usr-' + Date.now();
    this.messages.push({
      id: userMsgId,
      sender: 'user',
      time: 'Ahora',
      text: query
    });

    this.userInput = '';
    this.isThinking = true;

    try {
      // Llamada al servicio real de Gemini con fallback inteligente
      const payload: GeminiResponsePayload = await this.geminiService.askGemini(query);

      this.messages.push({
        id: 'model-' + Date.now(),
        sender: 'model',
        time: 'Ahora',
        reasoningTime: payload.reasoningTime || '1.1s',
        pagesIndexed: 'Respuesta generada',
        tokensProcessed: 'Contexto procesado',
        summaryTitle: payload.summaryTitle || 'Respuesta IASell Ultra',
        summaryMetric: payload.summaryMetric || 'Precisión 100%',
        summaryBody: payload.text,
        efficiency: payload.efficiency || 98,
        codeTitle: payload.codeTitle || 'script_solucion.py',
        codeSnippet: payload.codeSnippet || '# Ejecutado con éxito'
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.isThinking = false;
    }
  }

  toggleKeyModal(): void {
    this.tempApiKey = this.geminiService.getApiKey();
    this.showKeyModal = !this.showKeyModal;
  }

  saveApiKey(): void {
    this.geminiService.setApiKey(this.tempApiKey);
    this.showKeyModal = false;
  }

  copyAction(): void {
    this.copyBtnText = '¡Copiado!';
    setTimeout(() => {
      this.copyBtnText = 'Copiar texto';
    }, 2000);
  }
}

