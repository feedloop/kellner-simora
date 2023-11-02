import Template from '@/components/template';
import React from 'react';
import IntroSection from './_component/intro-section';
import CtaSection from './_component/cta-section';
import TestimonialSection from './_component/testimonial-section';
import FaqSection from './_component/faq-section';
import ContactUsSection from './_component/contact-us-section';

function Recruitment() {
  return (
    <Template>
      <IntroSection />
      <CtaSection/>
      <TestimonialSection/>
      <FaqSection/>
      <ContactUsSection/>
    </Template>
  );
}

export default Recruitment;
