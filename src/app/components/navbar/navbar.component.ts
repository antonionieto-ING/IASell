import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50">
      <!-- Top Announcement Bar -->
      @if (showBanner) {
        <aside class="w-full bg-[#f1f5fb]/95 backdrop-blur-md border-b border-border-subtle/60 px-4 sm:px-6">
          <div class="max-w-[1400px] mx-auto h-9 flex items-center justify-between text-xs sm:text-sm">
            <div class="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white font-medium text-google-blue shadow-sm border border-google-blue/20 text-[11px]">
                <span class="material-symbols-outlined text-[13px] text-google-blue" style="font-variation-settings: 'FILL' 1;">confirmation_number</span> Cupón
              </span>
              <span class="font-medium text-on-surface truncate">Prueba por primera vez el cupón y recibe un descuento exclusivo</span>
              <a class="text-google-blue hover:text-google-blue-hover font-semibold inline-flex items-center gap-0.5 shrink-0 ml-1 hover:underline" href="#precios">
                Obtener cupón <span class="text-[13px]">→</span>
              </a>
            </div>
            <button aria-label="Cerrar aviso" (click)="dismissBanner()" class="p-1 text-secondary-text hover:text-on-surface rounded-full transition-colors hidden md:block">
              <span class="material-symbols-outlined text-[16px] leading-none">close</span>
            </button>
          </div>
        </aside>
      }

      <!-- Main Navigation Bar -->
      <div class="w-full bg-white/90 backdrop-blur-xl border-b border-border-subtle/80 px-4 sm:px-8">
        <div class="max-w-[1400px] mx-auto h-16 flex items-center justify-between gap-4">
          <!-- Brand & Nav items -->
          <div class="flex items-center gap-8 lg:gap-10">
            <a class="flex items-center gap-2.5 group" href="#">
              <!-- Gemini Sparkle Logo -->
              <div class="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1a73e8] via-[#9b51e0] to-[#ea4335] p-[1.5px] shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <div class="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <span class="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-tr from-[#1a73e8] via-[#8e44ad] to-[#ea4335] text-[20px]" style="font-variation-settings: 'FILL' 1;">
                    auto_awesome
                  </span>
                </div>
              </div>
              <div class="flex items-baseline gap-1.5 font-sans">
                <span class="text-xl font-bold tracking-tight text-on-surface group-hover:text-google-blue transition-colors">IASell</span>
                <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-google-blue/10 to-purple-500/10 text-google-blue border border-google-blue/20">Pro</span>
              </div>
            </a>
            <nav class="hidden md:flex items-center gap-1 font-sans text-sm font-medium text-secondary-text">
              <a class="px-3.5 py-1.5 rounded-full hover:text-google-blue hover:bg-surface-variant transition-all duration-200" href="#capacidades">Capacidades</a>
              <a class="px-3.5 py-1.5 rounded-full hover:text-google-blue hover:bg-surface-variant transition-all duration-200" href="#modelos">Modelos</a>
              <a class="px-3.5 py-1.5 rounded-full hover:text-google-blue hover:bg-surface-variant transition-all duration-200" href="#precios">Precios</a>
              <a class="px-3.5 py-1.5 rounded-full hover:text-google-blue hover:bg-surface-variant transition-all duration-200" href="#comunidad">Comunidad</a>
              <a class="px-3.5 py-1.5 rounded-full hover:text-google-blue hover:bg-surface-variant transition-all duration-200" href="#faq">FAQ</a>
            </nav>
          </div>

          <!-- Right Side CTA / Auth -->
          <div class="flex items-center gap-3 font-sans text-sm font-medium">
            <a class="px-5 py-2 text-on-surface hover:text-google-blue hover:bg-surface-variant rounded-full transition-all font-semibold" href="#precios">
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  showBanner = true;

  dismissBanner(): void {
    this.showBanner = false;
  }
}
