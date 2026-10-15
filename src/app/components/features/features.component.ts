import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

interface Feature {
  title: string;
  description: string;
  icon: string;
  colorBg: string;
  colorText: string;
  tag: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ScrollAnimateDirective],
  template: `
    <section class="w-full py-24 bg-surface-variant/40 px-4 sm:px-6" id="capacidades">
      <div class="max-w-[1240px] mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16" appScrollAnimate>
          <span class="inline-block px-3 py-1 rounded-full bg-white border border-border-subtle font-sans text-xs font-semibold text-google-blue uppercase tracking-wider mb-3 shadow-sm">
            Capacidades Diseñadas Para Ti
          </span>
          <h2 class="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
            Todo el poder de la IA en tus manos cotidianas
          </h2>
          <p class="font-body text-base sm:text-lg text-secondary-text">
            Diseñado para investigadores, desarrolladores, diseñadores y profesionales que exigen razonamiento sin concesiones ni barreras.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (feature of features; track feature.title) {
            <div appScrollAnimate
                 class="bg-white rounded-3xl p-6 sm:p-7 border border-border-card shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                     [class]="feature.colorBg + ' ' + feature.colorText">
                  <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">
                    {{ feature.icon }}
                  </span>
                </div>
                <h3 class="font-sans font-bold text-xl text-on-surface group-hover:text-google-blue transition-colors mb-2.5">
                  {{ feature.title }}
                </h3>
                <p class="text-sm text-secondary-text leading-relaxed mb-6">
                  {{ feature.description }}
                </p>
              </div>
              <div class="relative z-10 bg-surface rounded-xl p-3 border border-border-subtle/70 text-xs font-sans text-secondary-text flex items-center gap-2 group-hover:border-google-blue/30 transition-colors">
                <span class="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform" [class]="feature.colorText">check_circle</span>
                <span>{{ feature.tag }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      title: 'Razonamiento y Código Full-Stack',
      description: 'Depuración en tiempo real, arquitectura de software, scripts automatizados y visualización directa de componentes HTML/React.',
      icon: 'terminal',
      colorBg: 'bg-blue-50',
      colorText: 'text-google-blue',
      tag: 'Python, TypeScript, SQL, Rust y más'
    },
    {
      title: 'Análisis Multimodal de Archivos',
      description: 'Carga libros enteros, horas de grabaciones de audio, vídeos o miles de filas en CSV. Su ventana de 2M tokens retiene todo sin olvidar detalles.',
      icon: 'dataset',
      colorBg: 'bg-red-50',
      colorText: 'text-google-red',
      tag: 'Soporta PDF, MP4, MP3, XLSX, DOCX'
    },
    {
      title: 'Creación Visual e Ideas Fotorrealistas',
      description: 'Genera imágenes con precisión hiperrealista, edita partes específicas mediante lenguaje coloquial y diseña mockups en cuestión de segundos.',
      icon: 'palette',
      colorBg: 'bg-yellow-50',
      colorText: 'text-google-yellow',
      tag: 'Motor de difusión 4K integrado'
    },
    {
      title: 'Espacios de Trabajo y Asistentes',
      description: 'Crea agentes personalizados con instrucciones particulares, bases de conocimiento propias y herramientas conectadas a tu correo o almacenamiento.',
      icon: 'account_tree',
      colorBg: 'bg-green-50',
      colorText: 'text-google-green',
      tag: 'Gemelos digitales para cada proyecto'
    }
  ];
}
