import { BuildingImage } from '@/assets/images';
import { COLOR_TEXT } from '@/constants/ui';
import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function IntroSection() {
  return (
    <section className='tw-w-full tw-px-[1rem] tw-pt-[6rem] sm:tw-px-[7rem]'>
      <VStack className='tw-text-center'>
        <Text
          color={'primary.500'}
          fontSize={{ base: '.875rem', sm: '1rem' }}
          fontWeight={'semibold'}
        >
          Tentang Kami
        </Text>
        <Heading
          as={'h2'}
          fontWeight={'semibold'}
          fontSize={'2.25rem'}
          lineHeight={'2.75rem'}
          letterSpacing={'-2%'}
        >
          Mengapa Memilih Kellner'S
        </Heading>
        <Text
          color={COLOR_TEXT}
          fontSize={{ base: '1.125rem', sm: '1.25rem' }}
          maxW={{ sm: '80%' }}
          mx={'auto'}
        >
          We believe that Indonesia has a big role to play in making our world a
          better place to live in. With Indonesian values, natural resources and
          as well as Indonesian talents.
        </Text>
      </VStack>
      <Box
        display={'flex'}
        flexDir={{ base: 'column-reverse', sm: 'row' }}
        alignItems={{ base: 'normal', sm: 'center' }}
        gap={{ base: '3rem', sm: '4rem' }}
        py={{ base: '4rem', sm: '6rem' }}
      >
        <Image src={BuildingImage} alt='building-with-much-windows' />
        <Box
          display={'flex'}
          flexDir={'column'}
          gap={'.5rem'}
          maxW={{ sm: '50%' }}
        >
          <Text lineHeight={{ base: '1.5rem', sm: '1.75rem' }}>
            We also believe that talents are forged through times, experience
            and skills. The process of forging and enabling Indonesian talents
            with industry mission-fit, digital-fit, global-fit skills is an
            approach we, at Kellner Simora, is endeavoring to solve a major
            problem that Indonesia has today, lack of world-class talents. We
            believe these world-class talents, uniquely with Indonesian values,
            are the ones that will lead Indonesian and global companies. Our
            mission is to forge Indonesian talents to be world-class leaders
          </Text>
          <Text lineHeight={{ base: '1.5rem', sm: '1.75rem' }}>
            We have witnessed as well, the acceleration of growth can happen
            in the company with professional hires that comes from outside the
            company . These type of talents are needed in certain situations,
            whereby , it is very important to quickly infuse talents into the
            organization to fulfill the demand.
          </Text>
        </Box>
      </Box>
    </section>
  );
}

export default IntroSection;
