'use client';
import React from 'react';
import Carousel from '@/components/organisms/carousel';
import { Box } from '@chakra-ui/react';
import { COLOR_SNOW_LIGHTEST } from '@/constants/ui';

function TestimonialSection() {
  return (
    <section className='tw-relative  tw-px-[1rem] tw-py-[2rem] sm:tw-px-[7rem]'>
      <Box bgColor={COLOR_SNOW_LIGHTEST} className=' tw-p-[32px]'>
        <Carousel />
      </Box>
    </section>
  );
}

export default TestimonialSection;
