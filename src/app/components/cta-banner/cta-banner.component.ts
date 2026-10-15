import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [ScrollAnimateDirective],
  template: `
    <section class="w-full py-20 px-4 sm:px-6 bg-gradient-to-b from-surface to-surface-variant/50">
      <div appScrollAnimate class="max-w-4xl mx-auto bg-gradient-to-br from-white via-white to-blue-50/60 rounded-3xl p-8 sm:p-14 border border-border-subtle hover:border-google-blue/30 shadow-xl hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden group">
        <!-- Floating Google Color Accents -->
        <div class="absolute -top-12 -right-12 w-48 h-48 bg-google-blue/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
        <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-google-yellow/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

        <div class="relative z-10 flex flex-col items-center">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-google-blue via-purple-600 to-google-red p-[1.5px] mb-6 shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
            <div class="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <span class="material-symbols-outlined text-google-blue text-[28px]" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
            </div>
          </div>

          <h2 class="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4 max-w-xl group-hover:text-google-blue transition-colors">
            Empieza a crear sin límites hoy con IASell Pro
          </h2>
          <p class="font-body text-base sm:text-lg text-secondary-text max-w-md mx-auto mb-8">
            Únete a millones de personas que ya potencian su productividad con el modelo multimodal más avanzado.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-google-blue hover:bg-google-blue-hover text-white font-sans font-semibold text-base shadow-md hover:shadow-xl hover:shadow-google-blue/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95" href="#precios">
              Probar 1 mes gratis
            </a>
            <a class="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-surface-variant text-on-surface hover:text-google-blue border border-border-subtle hover:border-google-blue/40 font-sans font-medium text-base shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-1 active:scale-95" href="#precios">
              Iniciar sesión
            </a>
          </div>
          <span class="text-xs text-secondary-text mt-4">19,99€/mes después del periodo de prueba • Cancela en cualquier momento</span>
        </div>
      </div>
    </section>
  `
})
export class CtaBannerComponent {}
