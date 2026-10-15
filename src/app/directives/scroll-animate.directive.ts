import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const nativeEl = this.el.nativeElement;
    
    // Configurar estado inicial
    this.renderer.addClass(nativeEl, 'opacity-0');
    this.renderer.addClass(nativeEl, 'translate-y-8');
    this.renderer.addClass(nativeEl, 'transition-all');
    this.renderer.addClass(nativeEl, 'duration-700');
    this.renderer.addClass(nativeEl, 'ease-out');

    // Usar IntersectionObserver para animar al entrar en pantalla
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(nativeEl, 'opacity-0');
            this.renderer.removeClass(nativeEl, 'translate-y-8');
            this.renderer.addClass(nativeEl, 'opacity-100');
            this.renderer.addClass(nativeEl, 'translate-y-0');
            observer.unobserve(nativeEl);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      observer.observe(nativeEl);
    } else {
      // Fallback si no hay soporte para observer
      this.renderer.removeClass(nativeEl, 'opacity-0');
      this.renderer.removeClass(nativeEl, 'translate-y-8');
    }
  }
}
