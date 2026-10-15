import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="w-full bg-white border-t border-border-subtle py-12 px-4 sm:px-8 font-body">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-border-subtle">
          <!-- Brand column -->
          <div class="col-span-2 space-y-3 pr-4">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg bg-gradient-to-tr from-google-blue to-purple-600 flex items-center justify-center text-white">
                <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
              </div>
              <span class="font-sans font-bold text-lg text-on-surface">IASell</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-variant text-google-blue border border-border-subtle">Pro</span>
            </div>
            <p class="text-xs sm:text-sm text-secondary-text max-w-sm leading-relaxed">
              Suscripción de inteligencia artificial de próxima generación para personas que buscan ampliar sus límites creativos y profesionales.
            </p>
            <div class="pt-2 flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-google-green text-xs font-medium border border-green-200">
                <span class="w-2 h-2 rounded-full bg-google-green animate-pulse"></span> Todos los sistemas operativos
              </span>
            </div>
          </div>

          <!-- Col 1 -->
          <div class="space-y-2.5">
            <h4 class="font-sans font-semibold text-xs text-on-surface uppercase tracking-wider">Modelos</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-secondary-text">
              <li><a class="hover:text-google-blue transition-colors" href="#modelos">IASell Ultra 2.5</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#modelos">IASell Flash 2.5</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#modelos">Visión &amp; Audio</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#modelos">Benchmarks MMLU</a></li>
            </ul>
          </div>

          <!-- Col 2 -->
          <div class="space-y-2.5">
            <h4 class="font-sans font-semibold text-xs text-on-surface uppercase tracking-wider">Recursos</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-secondary-text">
              <li><a class="hover:text-google-blue transition-colors" href="#capacidades">Capacidades</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#capacidades">Guía de Prompts</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#capacidades">Documentación API</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#faq">Centro de ayuda</a></li>
            </ul>
          </div>

          <!-- Col 3 -->
          <div class="space-y-2.5">
            <h4 class="font-sans font-semibold text-xs text-on-surface uppercase tracking-wider">Compañía</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-secondary-text">
              <li><a class="hover:text-google-blue transition-colors" href="#">Acerca de IASell</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#">Principios de IA Ética</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#">Privacidad y Seguridad</a></li>
              <li><a class="hover:text-google-blue transition-colors" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-text">
          <div class="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
            <span>© {{ currentYear }} IASell Technologies Inc.</span>
            <a class="hover:text-on-surface transition-colors" href="#">Privacidad</a>
            <a class="hover:text-on-surface transition-colors" href="#">Términos del Servicio</a>
            <a class="hover:text-on-surface transition-colors" href="#">Configuración de Cookies</a>
          </div>

          <!-- Language Selector -->
          <div class="flex items-center gap-2">
            <button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-variant hover:bg-border-subtle text-on-surface font-sans text-xs transition-colors">
              <span class="material-symbols-outlined text-[16px]">language</span>
              <span>Español</span>
              <span class="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
