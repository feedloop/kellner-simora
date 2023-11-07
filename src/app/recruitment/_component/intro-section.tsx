import { ChefImage } from '@/assets/images';
import { COLOR_TEXT } from '@/constants/ui';
import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function IntroSection() {
  return (
    <section className='tw-w-full tw-px-[1rem] tw-pt-[6rem] sm:tw-px-[7rem]'>
      <VStack className='tw-text-center'>
        <Text color={'primary.500'} fontWeight={'semibold'}>
          Rekrutmen
        </Text>
        <Heading
          as={'h2'}
          fontWeight={'semibold'}
          fontSize={'2.25rem'}
          lineHeight={'2.75rem'}
          letterSpacing={'-2%'}
        >
          Kuliah sambil Kerja
        </Heading>
        <Text
          color={COLOR_TEXT}
          fontSize={'1.25rem'}
          maxW={{ sm: '60%' }}
          mx={'auto'}
        >
          A Holistic Approach to Learning and Professional Development.
        </Text>
      </VStack>
      <HStack display={{ base: 'none', sm: 'flex' }} gap={'4rem'} py={'6rem'}>
        <Image src={ChefImage} alt='chef-smiling' />
        <Box display={'flex'} flexDir={'column'} gap={'.5rem'} maxW={'50%'}>
          <Text lineHeight={'1.75rem'}>
            The Industry Intake Program is a training program for new hires who
            have either graduated from universities or have less than 2 years of
            experience. The program aims to give these talents who are going to
            be hired or who have just joined the company the skills and
            knowledge that they will use in their new role with the new company.
            Our goal is to get these talents ready so that companies can quickly
            put these new hires to work without a lengthy orientation process.
          </Text>
          <Text lineHeight={'1.75rem'}>
            We have identified the following roles that your company will have
            as new hires in this or upcoming fiscal year. We will equip them
            with the most current and world-class skills and so they can start
            working effectively and efficiently for your company’s advantage.
            Each role will be trained and developed using curated list of
            courses that has been proven highly used and effective to ensure the
            success of the role in obtaining their objectives.
          </Text>
        </Box>
      </HStack>
    </section>
  );
}

export default IntroSection;
