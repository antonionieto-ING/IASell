import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ModelsComparisonComponent } from './components/models-comparison/models-comparison.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    ModelsComparisonComponent,
    PricingComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaBannerComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main class="w-full pt-28">
      <app-hero></app-hero>
      <app-features></app-features>
      <app-models-comparison></app-models-comparison>
      <app-pricing></app-pricing>
      <app-testimonials></app-testimonials>
      <app-faq></app-faq>
      <app-cta-banner></app-cta-banner>
    </main>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {}
