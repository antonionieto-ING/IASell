import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  badgeBg: string;
  badgeText: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="w-full py-24 bg-white px-4 sm:px-6 border-t border-border-subtle" id="comunidad">
      <div class="max-w-[1240px] mx-auto">
        <div class="text-center max-w-xl mx-auto mb-16">
          <span class="inline-block px-3 py-1 rounded-full bg-surface-variant font-sans text-xs font-semibold text-google-blue uppercase tracking-wider mb-2">
            Comunidad y Creadores
          </span>
          <h2 class="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-3">
            Lo que dicen quienes ya crean con IASell Pro
          </h2>
          <p class="text-secondary-text text-base">
            Miles de mentes creativas usan IASell a diario para multiplicar su capacidad de ejecución.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (item of testimonials; track item.author) {
            <div class="bg-surface rounded-2xl p-6 border border-border-subtle space-y-4">
              <div class="flex items-center gap-1 text-google-yellow">
                <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              </div>
              <p class="text-sm text-on-surface leading-relaxed">
                "{{ item.quote }}"
              </p>
              <div class="flex items-center gap-3 pt-2">
                <div class="w-10 h-10 rounded-full font-bold flex items-center justify-center font-sans text-sm"
                     [class]="item.badgeBg + ' ' + item.badgeText">
                  {{ item.initials }}
                </div>
                <div>
                  <p class="font-sans text-sm font-bold text-on-surface">{{ item.author }}</p>
                  <p class="text-xs text-secondary-text">{{ item.role }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Poder subir un informe de 200 páginas y que en 2 segundos me extraiga la tesis central y las inconsistencias estadísticas ha cambiado por completo mi forma de investigar.',
      author: 'Elena Salgado',
      role: 'Investigadora en BioTech & Data Scientist',
      initials: 'ES',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-google-blue'
    },
    {
      quote: 'La capacidad de código de IASell Ultra supera con creces lo que había probado antes. Resuelve bugs oscuros de TypeScript y redacta tests exhaustivos sin inventar librerías.',
      author: 'Marcos Ruiz',
      role: 'Ingeniero Full-Stack Independiente',
      initials: 'MR',
      badgeBg: 'bg-green-100',
      badgeText: 'text-google-green'
    },
    {
      quote: 'Uso los Asistentes personalizados para estructurar lanzamientos de marca y guiones de contenido. Se siente como tener un socio estratega sentado al lado.',
      author: 'Clara Valdés',
      role: 'Directora Creativa & Creadora Digital',
      initials: 'CV',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-700'
    }
  ];
}
