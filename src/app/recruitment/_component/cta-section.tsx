import { CtaImage } from '@/assets/images';
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHTER,
  COLOR_PRIMARY_TEXT,
} from '@/constants/ui';
import { Button, HStack, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function CtaSection() {
  return (
    <section className='tw-relative tw-px-[7rem] tw-pb-[6rem]'>
      <HStack
        alignItems={'stretch'}
        justifyContent={'space-between'}
        borderRadius={'1rem'}
        bgColor={COLOR_PRIMARY_LIGHTER}
      >
        <div className='tw-p-16'>
          <Heading
            as={'h2'}
            fontSize={'1.875rem'}
            lineHeight={'2.375rem'}
            color={'white'}
            fontWeight={'semibold'}
          >
            Kuasai Bahasa Jerman sebelum Anda berangkat
          </Heading>
          <Text
            lineHeight={'1.875rem'}
            fontSize={'1.25rem'}
            color={'white'}
            fontWeight={400}
            mt={'1rem'}
          >
            Join over 4,000+ startups already growing with Untitled.
          </Text>
          <Button
            color={'white'}
            mt={'2.5rem'}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
          >
            Daftar pelatihan
          </Button>
        </div>
        <Image src={CtaImage} className='tw-h-fill tw-object-fill tw-rounded-r-2xl' alt='woman-smiling-in-conversation' />
      </HStack>
    </section>
  );
}

export default CtaSection;
