import { COLOR_TEXT } from '@/constants/ui';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import TestimonialItem from './testimonial-item';
import { testimonials } from '@/constants/lists';

function TestimonialSection() {
  return (
    <section className='w-relative tw-flex tw-flex-col tw-justify-between tw-gap-[6rem] tw-px-[1rem] tw-pb-[6rem] sm:tw-flex-row sm:tw-px-[7rem]'>
      <div className='sm:tw-max-w-[25%]'>
        <Heading
          fontSize={{ base: '1.875rem', sm: '2.25rem' }}
          fontWeight={'semibold'}
        >
          Testimoni Kuliah sambil Kerja
        </Heading>
        <Text color={COLOR_TEXT} mt={'1.25rem'}>
          What they said about Kellner'S on Study-Work
        </Text>
      </div>
      <div className='tw-flex tw-flex-wrap tw-gap-8'>
        {testimonials.map((item) => (
          <TestimonialItem
            picture={item.picture}
            key={crypto.randomUUID()}
            name={item.name}
            position={item.position}
            testimonial={item.testimonial}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
