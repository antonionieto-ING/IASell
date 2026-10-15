import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ScrollAnimateDirective],
  template: `
    <section class="w-full py-24 bg-surface px-4 sm:px-6" id="precios">
      <div class="max-w-[1240px] mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-20" appScrollAnimate>
          <span class="inline-block px-3 py-1 rounded-full bg-white border border-border-subtle font-sans text-xs font-semibold text-google-blue uppercase tracking-wider mb-3 shadow-sm">
            Planes y Suscripciones
          </span>
          <h2 class="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
            Comienza gratis o desbloquea todo el potencial con Pro
          </h2>
          <p class="text-secondary-text text-base sm:text-lg">
            Planes transparentes pensados para usuarios individuales, estudiantes, investigadores y creadores.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-6">
          <!-- TIER 1: GRATIS -->
          <div appScrollAnimate
               class="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-google-blue/40 group cursor-pointer relative">
            <div class="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
            <div class="relative z-10">
              <div class="mb-4">
                <h3 class="font-sans font-bold text-2xl text-on-surface mb-1 group-hover:text-google-blue transition-colors">Gratis</h3>
                <p class="text-xs text-secondary-text">Para explorar y realizar consultas cotidianas.</p>
              </div>
              <div class="flex items-baseline gap-1 my-6">
                <span class="font-sans text-4xl font-extrabold text-on-surface">0€</span>
                <span class="text-sm text-secondary-text font-medium">/ mes</span>
              </div>
              <ul class="space-y-3.5 text-sm text-secondary-text my-6">
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span>Acceso ilimitado a <strong>IASell Flash</strong></span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span>Ventana de contexto de 128K tokens</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span>Generación de imágenes en resolución estándar</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span>Acceso web y app móvil</span>
                </li>
              </ul>
            </div>
            <div class="relative z-10 pt-4">
              <a class="w-full py-3 rounded-full bg-surface-variant group-hover:bg-google-blue group-hover:text-white text-on-surface font-sans font-semibold text-center text-sm block transition-all shadow-sm group-hover:shadow hover:scale-[1.02] active:scale-95" href="#precios">
                Comenzar sin costo
              </a>
            </div>
          </div>

          <!-- TIER 2: IASELL PRO (Featured) -->
          <div appScrollAnimate
               class="bg-white rounded-3xl p-8 border-2 border-google-blue shadow-xl relative flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-google-blue/25 group cursor-pointer transform md:-translate-y-3">
            <!-- Glow effect on hover -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-google-blue/20 via-purple-500/20 to-google-red/20 rounded-[26px] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <!-- Badge Superior Sin Cortar (z-20) -->
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-google-blue text-white text-xs font-sans font-bold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide group-hover:scale-105 transition-transform z-20 whitespace-nowrap">
              <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">star</span> MÁS POPULAR
            </div>

            <div class="relative z-10 pt-1">
              <div class="mb-4">
                <div class="flex items-center gap-2">
                  <h3 class="font-sans font-bold text-2xl text-on-surface mb-1 group-hover:text-google-blue transition-colors">IASell Pro</h3>
                  <span class="text-xs bg-google-blue/10 text-google-blue px-2 py-0.5 rounded-full font-sans font-semibold group-hover:bg-google-blue group-hover:text-white transition-colors">1 mes gratis</span>
                </div>
                <p class="text-xs text-secondary-text">La experiencia definitiva de inteligencia artificial.</p>
              </div>
              <div class="flex items-baseline gap-1 my-6">
                <span class="font-sans text-4xl font-extrabold text-on-surface">19,99€</span>
                <span class="text-sm text-secondary-text font-medium">/ mes</span>
              </div>
              <ul class="space-y-3.5 text-sm text-on-surface my-6">
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-125 transition-transform">check_circle</span>
                  <span><strong>Acceso prioritario a IASell Ultra 2.5</strong></span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-125 transition-transform">check_circle</span>
                  <span><strong>Ventana de contexto ampliada a 1M tokens</strong> (sube libros y vídeos enteros)</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-125 transition-transform">check_circle</span>
                  <span>Ejecución de código en sandbox interactivo</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-125 transition-transform">check_circle</span>
                  <span>Generación visual 4K fotorrealista sin límites diarios</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-125 transition-transform">check_circle</span>
                  <span>Creación de Asistentes y Gemelos personalizados</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-125 transition-transform">check_circle</span>
                  <span>Soporte prioritario 24/7</span>
                </li>
              </ul>
            </div>
            <div class="relative z-10 pt-4">
              <p class="text-[11px] text-center text-secondary-text mb-3">1 mes de prueba gratuita, luego 19,99€/mes. Cancela cuando quieras.</p>
              <a class="w-full py-3.5 rounded-full bg-google-blue hover:bg-google-blue-hover text-white font-sans font-semibold text-center text-sm block shadow-md hover:shadow-xl hover:shadow-google-blue/30 transition-all transform hover:scale-[1.02] active:scale-95" href="#precios">
                Iniciar prueba de 1 mes gratis
              </a>
            </div>
          </div>

          <!-- TIER 3: ULTRA TEAM -->
          <div appScrollAnimate
               class="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-google-blue/40 group cursor-pointer relative">
            <div class="absolute inset-0 bg-gradient-to-b from-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
            <div class="relative z-10">
              <div class="mb-4">
                <h3 class="font-sans font-bold text-2xl text-on-surface mb-1 group-hover:text-google-blue transition-colors">Ultra Team</h3>
                <p class="text-xs text-secondary-text">Para creadores independientes y equipos ágiles.</p>
              </div>
              <div class="flex items-baseline gap-1 my-6">
                <span class="font-sans text-4xl font-extrabold text-on-surface">39€</span>
                <span class="text-sm text-secondary-text font-medium">/ mes por usuario</span>
              </div>
              <ul class="space-y-3.5 text-sm text-secondary-text my-6">
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span><strong>Todo lo incluido en Pro</strong></span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span><strong>Ventana de contexto máxima de 2M tokens</strong></span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span>Claves de API personales incluidas (10M tokens/mes)</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span>Espacio de trabajo compartido para proyectos</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">check</span>
                  <span>Garantía de privacidad estricta (sin entrenamiento en tus datos)</span>
                </li>
              </ul>
            </div>
            <div class="relative z-10 pt-4">
              <a class="w-full py-3 rounded-full bg-on-surface hover:bg-black text-white font-sans font-semibold text-center text-sm block transition-all shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-95" href="#precios">
                Probar Ultra Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent {}
