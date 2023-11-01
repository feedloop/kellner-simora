import { TestimonialImage } from '@/assets/images';
import { COLOR_GRAY_900, COLOR_TEXT } from '@/constants/ui';
import { HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function TestimonialSection() {
  return (
    <section className='tw-py-[2rem] tw-px-[7rem] tw-relative'>
      <HStack gap={'8rem'}>
        <Image src={TestimonialImage} alt='a-blonde-woman' className='tw-w-1/2' />
        <div style={{color:COLOR_GRAY_900}}>
          <Text fontSize={'2.25rem'} lineHeight={'2.75rem'} fontWeight={500} letterSpacing={'-2%'}>
            Saya bisa mendapatkan pengalaman kerja yang luar biasa di Eropa
          </Text>
          <div className='tw-mt-[2rem]'>
            <Text fontWeight={600} fontSize={'1.125rem'}>&mdash; Mathilde Lewis</Text>
            <Text lineHeight={'1.5rem'} color={COLOR_TEXT} mt={'.25rem'}>Magang di Jerman</Text>
          </div>
        </div>
      </HStack>
    </section>
  );
}

export default TestimonialSection;
