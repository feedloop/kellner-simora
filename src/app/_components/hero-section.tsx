import { HeroImage } from '@/assets/images';
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHTER,
  COLOR_PRIMARY_TEXT,
} from '@/constants/ui';
import { Box, Button, HStack, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function HeroSection() {
  return (
    <section
      style={{ backgroundColor: COLOR_PRIMARY_LIGHTER }}
      className='tw-relative tw-flex tw-min-h-screen tw-w-full tw-flex-col tw-justify-center tw-pb-[4rem] sm:tw-pb-0 tw-px-[1rem] sm:tw-px-[7rem]'
    >
      <Image
        src={HeroImage}
        alt='big-hero-img'
        className='tw-absolute tw-right-0 tw-top-0 tw-w-[75%] sm:tw-w-1/2'
      />
      <div className='tw-relative tw-z-10 tw-pt-44 sm:tw-pt-0'>
        <Text
          fontSize={{ base: '.875rem', sm: '1.5rem' }}
          color={'white'}
          fontWeight={700}
        >
          Kellner'S
        </Text>
        <Heading
          fontSize={{ base: '2.25rem', sm: '4.5rem' }}
          color={'white'}
          lineHeight={{ base: '2.75rem', sm: '4.84375rem' }}
          maxW={'37.5rem'}
        >
          Bukan mimpi, semua bisa ke Eropa!
        </Heading>
        <Text
          mt={{ base: '1rem', sm: '1.5rem' }}
          color={'white'}
          fontSize={{ base: '1.125rem', sm: '1.25rem' }}
        >
          Kami adalah rekan sekerja dalam mewujudkan mimpi Anda.
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column-reverse', sm: 'row' }}
          gap={'.75rem'}
          mt={{ base: '2rem', sm: '3rem' }}
        >
          <Button
            color={COLOR_PRIMARY_TEXT}
            size={{base:'md', sm:'lg'}}
            colorScheme='whiteAlpha'
            style={{ background: 'white' }}
          >
            Kenali Kami
          </Button>
          <Button
            color={'white'}
            size={{base:'md', sm:'lg'}}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
          >
            Daftar
          </Button>
        </Box>
      </div>
    </section>
  );
}

export default HeroSection;
