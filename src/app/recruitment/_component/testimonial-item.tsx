import { Avatar, CtaImage } from '@/assets/images';
import { COLOR_TEXT } from '@/constants/ui';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function TestimonialItem() {
  return (
    <div className='tw-flex tw-items-start tw-gap-[1rem] sm:tw-gap-0 sm:tw-block sm:tw-max-w-[12rem]'>
      <Image
        src={Avatar}
        alt='woman-smiling'
        className='tw-h-[6rem] tw-w-[6rem] tw-rounded-full tw-object-cover'
      />
      <div className='sm:tw-mt-5'>
        <Text fontWeight={'semibold'} fontSize={'1.125rem'}>
          Amelie Laurent
        </Text>
        <Text fontWeight={'semibold'} color={'primary.500'}>
          Staff Marketing
        </Text>
        <Text color={COLOR_TEXT} mt={".5rem"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
          tenetur error nostrum dolore quam.
        </Text>
      </div>
    </div>
  );
}

export default TestimonialItem;
