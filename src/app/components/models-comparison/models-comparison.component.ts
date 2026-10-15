import { Component } from '@angular/core';

@Component({
  selector: 'app-models-comparison',
  standalone: true,
  template: `
    <section class="w-full py-20 bg-white px-4 sm:px-6" id="modelos">
      <div class="max-w-[1240px] mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="inline-block px-3 py-1 rounded-full bg-surface-variant font-sans text-xs font-semibold text-google-blue uppercase tracking-wider mb-2">
            Comparativa de Modelos
          </span>
          <h2 class="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-3">
            Elige el motor perfecto para tu flujo de trabajo
          </h2>
          <p class="text-secondary-text text-base">
            Compara la agilidad de Flash frente a la potencia analítica de nivel doctoral de Ultra.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto" id="playground">
          <!-- Model Card 1: Flash -->
          <div class="bg-surface rounded-3xl p-8 border border-border-subtle flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center text-google-blue">
                    <span class="material-symbols-outlined text-[24px]">speed</span>
                  </div>
                  <div>
                    <h3 class="font-sans font-bold text-xl text-on-surface">IASell Flash 2.5</h3>
                    <p class="text-xs text-secondary-text">Velocidad pura y respuestas instantáneas</p>
                  </div>
                </div>
                <span class="px-3 py-1 rounded-full bg-white border border-border-subtle text-xs font-sans font-semibold text-on-surface">Gratis</span>
              </div>
              <div class="space-y-4 my-6">
                <div>
                  <div class="flex justify-between text-xs font-sans mb-1 font-medium">
                    <span class="text-secondary-text">Velocidad de respuesta</span>
                    <span class="text-on-surface font-semibold">Ultra Rápida (&lt; 0.3s)</span>
                  </div>
                  <div class="w-full bg-white rounded-full h-2">
                    <div class="bg-google-blue h-2 rounded-full w-[96%]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs font-sans mb-1 font-medium">
                    <span class="text-secondary-text">Capacidad de Razonamiento Lógico</span>
                    <span class="text-on-surface font-semibold">Excelente para tareas diarias</span>
                  </div>
                  <div class="w-full bg-white rounded-full h-2">
                    <div class="bg-google-blue h-2 rounded-full w-[78%]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs font-sans mb-1 font-medium">
                    <span class="text-secondary-text">Ventana de Contexto</span>
                    <span class="text-on-surface font-semibold">128K tokens (~150 páginas)</span>
                  </div>
                  <div class="w-full bg-white rounded-full h-2">
                    <div class="bg-google-blue h-2 rounded-full w-[50%]"></div>
                  </div>
                </div>
              </div>
              <p class="text-sm text-secondary-text leading-relaxed">
                Ideal para redacción de correos, resúmenes rápidos, lluvias de ideas, traducciones fluidas y consultas del día a día.
              </p>
            </div>
            <div class="pt-6 border-t border-border-subtle mt-6">
              <span class="text-xs font-medium text-secondary-text block mb-3">Disponible sin costo para todos los usuarios registrados.</span>
              <a class="w-full py-2.5 rounded-full bg-white hover:bg-surface-variant border border-border-subtle text-center text-sm font-sans font-semibold text-on-surface block transition-all" href="#precios">
                Usar IASell Flash
              </a>
            </div>
          </div>

          <!-- Model Card 2: Ultra (Highlighted Pro) -->
          <div class="bg-gradient-to-b from-blue-50/50 via-white to-white rounded-3xl p-8 border-2 border-google-blue/40 shadow-lg relative flex flex-col justify-between">
            <div class="absolute -top-3.5 right-8 bg-gradient-to-r from-google-blue to-purple-600 text-white text-xs font-sans font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">verified</span> MODELO INSIGNIA
            </div>
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-google-blue to-purple-600 flex items-center justify-center text-white shadow">
                    <span class="material-symbols-outlined text-[24px]" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
                  </div>
                  <div>
                    <h3 class="font-sans font-bold text-xl text-on-surface">IASell Ultra 2.5</h3>
                    <p class="text-xs text-secondary-text">Razonamiento doctoral y multimodal masivo</p>
                  </div>
                </div>
                <span class="px-3 py-1 rounded-full bg-google-blue/10 text-google-blue text-xs font-sans font-bold">Pro</span>
              </div>
              <div class="space-y-4 my-6">
                <div>
                  <div class="flex justify-between text-xs font-sans mb-1 font-medium">
                    <span class="text-secondary-text">Razonamiento Complejo (MMLU-Pro)</span>
                    <span class="text-google-blue font-bold">92.4% Benchmark SOTA</span>
                  </div>
                  <div class="w-full bg-surface-variant rounded-full h-2">
                    <div class="bg-gradient-to-r from-google-blue to-purple-600 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs font-sans mb-1 font-medium">
                    <span class="text-secondary-text">Programación &amp; Arquitectura de Software</span>
                    <span class="text-google-blue font-bold">Nivel Senior / Staff</span>
                  </div>
                  <div class="w-full bg-surface-variant rounded-full h-2">
                    <div class="bg-gradient-to-r from-google-blue to-purple-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs font-sans mb-1 font-medium">
                    <span class="text-secondary-text">Ventana de Contexto Máxima</span>
                    <span class="text-google-blue font-bold">2,000,000 tokens (~2,500 páginas)</span>
                  </div>
                  <div class="w-full bg-surface-variant rounded-full h-2">
                    <div class="bg-gradient-to-r from-google-blue to-purple-600 h-2 rounded-full w-[100%]"></div>
                  </div>
                </div>
              </div>
              <p class="text-sm text-secondary-text leading-relaxed">
                Diseñado para resolver problemas de matemáticas puras, ingeniería inversa, análisis legal intensivo y creación visual publicitaria de alta gama.
              </p>
            </div>
            <div class="pt-6 border-t border-border-subtle mt-6">
              <span class="text-xs font-medium text-google-blue block mb-3 font-sans">Incluido en la suscripción IASell Pro con acceso prioritario.</span>
              <a class="w-full py-2.5 rounded-full bg-google-blue hover:bg-google-blue-hover text-white text-center text-sm font-sans font-semibold block transition-all shadow-md" href="#precios">
                Desbloquear IASell Ultra con Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ModelsComparisonComponent {}
