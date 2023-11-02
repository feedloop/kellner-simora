import { COLOR_TEXT } from '@/constants/ui';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import TestimonialItem from './testimonial-item';

function TestimonialSection() {
  return (
    <section className='w-relative tw-flex tw-justify-between tw-gap-[6rem] tw-px-[7rem] tw-pb-[6rem]'>
      <div className='tw-max-w-[25%]'>
        <Heading fontWeight={"semibold"}>
          Testimoni Kuliah sambil Kerja
        </Heading>
        <Text color={COLOR_TEXT} mt={"1.25rem"}>Lorem ipsum dolor sit amet consectetur adispiscing elit</Text>
      </div>
      <div className='tw-flex tw-gap-8 tw-flex-wrap'>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
      </div>
    </section>
  );
}

export default TestimonialSection;
