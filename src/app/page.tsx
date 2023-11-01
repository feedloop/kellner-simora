import Template from '@/components/template';
import HeroSection from './_components/hero-section';
import AboutSection from './_components/about-section';
import TestimonialSection from './_components/testimonial-section';
import PricingSection from './_components/pricing-section';
import PitchSection from './_components/pitch-section';

export default function Home() {
  return (
      <Template>
        <HeroSection/>
        <AboutSection/>
        <TestimonialSection/>
        <PricingSection/>
        <PitchSection/>
      </Template>
  );
}
