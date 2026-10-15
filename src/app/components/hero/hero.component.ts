import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollAnimateDirective],
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
            <span>Comenzar prueba gratuita de 14 días</span>
          </a>
          <!-- Boton Secundario con borde y sombreado -->
          <a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-surface-variant text-on-surface font-sans font-medium text-base border border-border-subtle hover:border-google-blue/50 shadow-sm hover:shadow-md hover:text-google-blue transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group" href="#playground">
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

        <!-- HERO PRODUCT WORKSPACE SHOWCASE (Interactive Multimodal UI) -->
        <div appScrollAnimate class="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-border-subtle/80 shadow-[0_20px_60px_-15px_rgba(26,115,232,0.1)] hover:shadow-[0_25px_70px_-15px_rgba(26,115,232,0.2)] hover:border-google-blue/30 transition-all duration-500 overflow-hidden text-left font-body">
          <!-- Top Window Header Bar -->
          <div class="bg-surface-variant/80 border-b border-border-subtle px-5 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#ea4335]/70 hover:bg-[#ea4335] transition-colors cursor-pointer inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-[#fbbc04]/70 hover:bg-[#fbbc04] transition-colors cursor-pointer inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-[#34a853]/70 hover:bg-[#34a853] transition-colors cursor-pointer inline-block"></span>
              <span class="ml-3 font-sans text-xs font-semibold text-secondary-text flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-google-blue"></span> IASell Studio Pro — Proyecto: Auditoría Financiera Q3
              </span>
            </div>
            <!-- Model Switcher Pill in Header -->
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1 text-xs font-sans font-semibold px-2.5 py-1 rounded-full bg-white border border-border-subtle text-google-blue shadow-sm hover:border-google-blue/40 transition-colors cursor-pointer">
                <span class="material-symbols-outlined text-[14px]">bolt</span> IASell Ultra 2.5
              </span>
              <span class="text-xs font-mono text-secondary-text bg-white/70 px-2 py-0.5 rounded border border-border-subtle hidden sm:inline">1.8M / 2.0M tokens</span>
            </div>
          </div>

          <!-- Studio Body -->
          <div class="p-6 sm:p-8 space-y-6">
            <!-- User Prompt Simulation Card -->
            <div class="bg-surface rounded-2xl p-4 sm:p-5 border border-border-subtle hover:border-border-subtle/80 hover:shadow-sm transition-all">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-on-surface text-white flex items-center justify-center font-sans font-bold text-xs shrink-0 shadow">
                  TÚ
                </div>
                <div class="flex-1 space-y-3">
                  <div class="flex items-center justify-between">
                    <p class="font-medium text-on-surface text-sm sm:text-base">
                      "Analiza este balance financiero de 80 páginas, genera un resumen ejecutivo y redacta la propuesta comercial en tono persuasivo con proyección a 3 años."
                    </p>
                    <span class="text-xs text-secondary-text shrink-0 ml-2">Hace 2 min</span>
                  </div>
                  <!-- Attached File Chips -->
                  <div class="flex flex-wrap items-center gap-2 text-xs">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-border-subtle hover:border-google-blue/40 hover:shadow-sm transition-all cursor-pointer text-on-surface font-medium">
                      <span class="material-symbols-outlined text-[16px] text-google-red">picture_as_pdf</span> informe_q3_consolidado.pdf (14.2 MB)
                    </span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-border-subtle hover:border-google-blue/40 hover:shadow-sm transition-all cursor-pointer text-on-surface font-medium">
                      <span class="material-symbols-outlined text-[16px] text-google-green">table_chart</span> metricas_ebitda_2025.csv
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- AI Response Container with Real-time Multimodal Preview -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-google-blue via-purple-600 to-google-red p-[1.5px] shrink-0 shadow-sm">
                <div class="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined text-google-blue text-[18px]" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
                </div>
              </div>
              <div class="flex-1 space-y-4">
                <!-- Status & Reasoning Pill -->
                <div class="flex flex-wrap items-center gap-2">
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-google-blue/10 text-google-blue text-xs font-sans font-semibold">
                    <span class="material-symbols-outlined text-[14px]">psychology</span> Razonamiento profundo (1.8s)
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 text-google-green text-xs font-sans font-medium border border-green-200">
                    <span class="material-symbols-outlined text-[14px]">task_alt</span> 80 páginas indexadas
                  </span>
                  <span class="text-xs text-secondary-text font-mono">1.2M tokens procesados</span>
                </div>

                <!-- Structured Rich Output Presentation -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Executive Insight Card -->
                  <div class="bg-surface rounded-2xl p-4 border border-border-subtle space-y-2.5 hover:border-google-blue/30 transition-colors">
                    <div class="flex items-center justify-between">
                      <span class="font-sans font-semibold text-xs uppercase tracking-wider text-google-blue">1. Resumen Ejecutivo Clave</span>
                      <span class="text-xs font-mono text-google-green font-bold">+28.4% YoY</span>
                    </div>
                    <p class="text-xs sm:text-sm text-secondary-text leading-relaxed">
                      El margen neto subió de 14.2% a 19.8% impulsado por optimización operativa. Se identificó una oportunidad inmediata de ahorro de <strong>€140,000 anuales</strong> en licencias redundantes.
                    </p>
                    <div class="w-full bg-white rounded-xl p-2.5 border border-border-subtle">
                      <div class="flex justify-between text-[11px] font-sans font-medium text-secondary-text mb-1">
                        <span>Eficiencia Operativa</span>
                        <span class="text-on-surface font-semibold">94.2%</span>
                      </div>
                      <div class="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
                        <div class="bg-gradient-to-r from-google-blue to-google-green h-full rounded-full w-[94%]"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Python Code / Model Logic Preview -->
                  <div class="bg-[#1e2022] text-gray-100 rounded-2xl p-4 border border-gray-700 space-y-2">
                    <div class="flex items-center justify-between text-xs text-gray-400 code-editor-font">
                      <span class="flex items-center gap-1 text-[#4285f4]"><span class="material-symbols-outlined text-[14px]">code</span> montecarlo_simulation.py</span>
                      <span>Ejecutado con éxito ✓</span>
                    </div>
                    <pre class="code-editor-font text-[11px] leading-5 text-gray-300 overflow-x-auto"><span class="text-purple-400">import</span> numpy <span class="text-purple-400">as</span> np
<span class="text-green-400"># Simulación de crecimiento a 3 años</span>
arr_q4 = np.array([<span class="text-yellow-300">120000</span>, <span class="text-yellow-300">145000</span>, <span class="text-yellow-300">182000</span>])
cagr_expected = (<span class="text-yellow-300">1.34</span> ** (<span class="text-yellow-300">1</span>/<span class="text-yellow-300">3</span>) - <span class="text-yellow-300">1</span>) * <span class="text-yellow-300">100</span>
<span class="text-blue-400">print</span>(<span class="text-yellow-300">f"ROI proyectado: &#123;cagr_expected:.2f&#125;%"</span>)
<span class="text-gray-500"># &gt;&gt; Salida: ROI proyectado: 10.25% mensual</span></pre>
                  </div>
                </div>

                <!-- Instant Action Trigger -->
                <div class="bg-gradient-to-r from-blue-50/60 via-purple-50/40 to-transparent p-3.5 rounded-xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span class="text-on-surface font-medium">Borrador de propuesta comercial listo para exportar a PDF o Google Docs.</span>
                  <div class="flex items-center gap-2">
                    <button (click)="copyAction()" class="px-3.5 py-1.5 rounded-lg bg-white border border-border-subtle hover:border-google-blue/40 hover:bg-surface font-semibold text-on-surface hover:text-google-blue transition-all shadow-sm hover:shadow inline-flex items-center gap-1 active:scale-95">
                      <span class="material-symbols-outlined text-[15px]">content_copy</span> {{ copyBtnText }}
                    </button>
                    <button class="px-3.5 py-1.5 rounded-lg bg-google-blue text-white font-semibold hover:bg-google-blue-hover transition-all shadow-sm hover:shadow hover:shadow-google-blue/30 inline-flex items-center gap-1 transform hover:-translate-y-0.5 active:scale-95">
                      <span class="material-symbols-outlined text-[15px]">send</span> Compartir
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Floating Prompt Mockup Bar -->
            <div class="pt-2">
              <div class="relative bg-surface rounded-2xl border border-border-subtle hover:border-google-blue/40 p-2.5 flex items-center gap-3 shadow-inner transition-colors">
                <button class="p-2 rounded-xl hover:bg-white hover:text-google-blue text-secondary-text transition-all hover:scale-110 active:scale-95" title="Subir archivo o foto">
                  <span class="material-symbols-outlined text-[20px]">add_circle</span>
                </button>
                <input class="w-full bg-transparent text-sm text-on-surface placeholder-secondary-text focus:outline-none" placeholder="Pregunta algo, solicita código, o arrastra un video/documento..." readonly type="text"/>
                <div class="flex items-center gap-2 pr-1">
                  <span class="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans text-secondary-text bg-white px-2 py-1 rounded-md border border-border-subtle hover:border-google-blue/30 transition-colors">
                    <span class="material-symbols-outlined text-[13px]">mic</span> Voz
                  </span>
                  <button class="w-9 h-9 rounded-xl bg-google-blue text-white flex items-center justify-center hover:bg-google-blue-hover hover:scale-105 active:scale-95 transition-all shadow hover:shadow-md hover:shadow-google-blue/30">
                    <span class="material-symbols-outlined text-[18px]">arrow_upward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  copyBtnText = 'Copiar texto';

  copyAction(): void {
    this.copyBtnText = '¡Copiado!';
    setTimeout(() => {
      this.copyBtnText = 'Copiar texto';
    }, 2000);
  }
}
