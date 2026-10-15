import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section class="w-full py-20 bg-surface px-4 sm:px-6" id="faq">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="font-sans text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mb-2">
            Preguntas Frecuentes
          </h2>
          <p class="text-secondary-text text-sm sm:text-base">
            Todo lo que necesitas saber antes de dar el salto a IASell Pro.
          </p>
        </div>

        <div class="space-y-4">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="bg-white rounded-2xl p-5 border border-border-subtle transition-all cursor-pointer"
                 [class.ring-1]="faq.isOpen"
                 [class.ring-google-blue-20]="faq.isOpen"
                 (click)="toggleFaq(i)">
              <div class="flex justify-between items-center font-sans font-semibold text-on-surface text-base select-none">
                <span>{{ faq.question }}</span>
                <span class="material-symbols-outlined text-secondary-text transition-transform duration-200"
                      [class.rotate-180]="faq.isOpen">
                  expand_more
                </span>
              </div>
              @if (faq.isOpen) {
                <p class="text-secondary-text text-sm mt-3 leading-relaxed">
                  {{ faq.answer }}
                </p>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: '¿Cómo funciona la prueba gratuita de 1 mes?',
      answer: 'Tienes acceso completo e irrestricto a todas las funcionalidades de IASell Pro durante 30 días. Si decides que no es para ti, puedes cancelar con un solo clic desde tu panel antes de que termine el periodo y no se te cobrará nada.',
      isOpen: false
    },
    {
      question: '¿Qué diferencia a IASell Ultra de otros modelos?',
      answer: 'IASell Ultra cuenta con una ventana de contexto nativa de hasta 2 millones de tokens y una capacidad de razonamiento multimodal que procesa texto, código, imágenes de alta resolución, audio y vídeo de forma simultánea con una latencia ultra baja.',
      isOpen: false
    },
    {
      question: '¿Se utilizan mis datos y archivos privados para entrenar modelos?',
      answer: 'No. En IASell Pro y Ultra Team tus archivos, prompts e historiales están completamente aislados y encriptados en tránsito y en reposo (AES-256). Nunca usamos los datos de usuarios Pro para entrenar futuros modelos.',
      isOpen: false
    },
    {
      question: '¿Puedo usar IASell en mi teléfono o tablet?',
      answer: 'Sí, IASell está optimizado para web móvil en iOS y Android, y cuenta con sincronización inmediata de sesiones entre tus dispositivos.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
