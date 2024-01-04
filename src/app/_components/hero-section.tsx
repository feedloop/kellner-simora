import { WomenHeroSection } from '@/assets/images';
import { CirclePatternLeft, CirclePatternRight } from '@/assets/svgs';
import { COLOR_SECONDARY, COLOR_PRIMARY } from '@/constants/ui';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function HeroSection() {
  return (
    <section
      style={{ backgroundColor: COLOR_PRIMARY }}
      className='tw-relative tw-flex tw-min-h-screen tw-w-full tw-flex-col tw-justify-center tw-px-[1rem] tw-pb-[4rem] sm:tw-px-[7rem] sm:tw-pb-0'
    >
      <div className=' tw-absolute tw-left-0 tw-right-0 tw-flex tw-justify-end md:tw-justify-between'>
        <Image
          src={CirclePatternLeft}
          alt='circle-pattern-left'
          className='tw-hidden tw-w-auto md:tw-block md:tw-w-1/4'
        />
        <Image
          src={CirclePatternRight}
          alt='circle-pattern-right '
          className='tw-w-auto md:tw-w-1/3'
        />
      </div>

      <div className='tw-relative tw-z-10 tw-pt-20 sm:tw-pt-0'>
        <Text
          fontSize={{ base: '.875rem', sm: '1.5rem' }}
          color={'white'}
          fontWeight={700}
        >
          Kellner Simora Internasional
        </Text>
        <Heading
          fontSize={{ base: '2.25rem', sm: '4.5rem' }}
          color={'white'}
          lineHeight={{ base: '2.75rem', sm: '4.84375rem' }}
          maxW={'47.5rem'}
        >
          Membangun Talenta & Organisasi Kelas Dunia untuk Indonesia
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
            color='white'
            size={{ base: 'md', sm: 'lg' }}
            colorScheme='whiteAlpha'
            style={{ background: COLOR_SECONDARY }}
          >
            Kenali Kami
          </Button>
        </Box>
      </div>
      <Image
        src={WomenHeroSection}
        alt='big-hero-img'
        className='tw-absolute tw-bottom-0 tw-right-5 tw-z-[1] tw-hidden tw-w-1/2 sm:tw-w-[40%] md:tw-hidden md:tw-w-[40%]  lg:tw-block'
      />
    </section>
  );
}

export default HeroSection;
