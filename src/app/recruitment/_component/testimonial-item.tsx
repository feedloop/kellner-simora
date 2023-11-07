import { Avatar, CtaImage } from '@/assets/images';
import { COLOR_TEXT } from '@/constants/ui';
import { Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

function TestimonialItem({
  name,
  position,
  testimonial,
  picture,
}: {
  name: string;
  position: string;
  testimonial: string;
  picture: StaticImageData;
}) {
  return (
    <div className='tw-flex tw-items-start tw-gap-[1rem] sm:tw-block sm:tw-max-w-[12rem] sm:tw-gap-0'>
      <Image
        src={picture}
        alt='woman-smiling'
        className='tw-h-[6rem] tw-w-[6rem] tw-rounded-full tw-object-cover'
      />
      <div className='sm:tw-mt-5'>
        <Text fontWeight={'semibold'} fontSize={'1.125rem'}>
          {name}
        </Text>
        <Text fontWeight={'semibold'} color={'primary.500'}>
          {position}
        </Text>
        <Text color={COLOR_TEXT} mt={'.5rem'}>
          {testimonial}
        </Text>
      </div>
    </div>
  );
}

export default TestimonialItem;
