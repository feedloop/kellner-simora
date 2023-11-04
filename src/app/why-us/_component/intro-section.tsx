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
          maxW={{ sm: '60%' }}
          mx={'auto'}
        >
          We have offices and teams all around the world.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            libero reprehenderit perspiciatis maiores mollitia molestiae ad
            autem ipsam nisi facilis? Rem eligendi, sunt exercitationem ipsa
            vitae veritatis voluptatibus ad enim?
          </Text>
          <Text lineHeight={{ base: '1.5rem', sm: '1.75rem' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            libero reprehenderit perspiciatis maiores mollitia molestiae ad
            autem ipsam nisi facilis? Rem eligendi, sunt exercitationem ipsa
            vitae veritatis voluptatibus ad enim?
          </Text>
          <Text lineHeight={{ base: '1.5rem', sm: '1.75rem' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            libero reprehenderit perspiciatis maiores mollitia molestiae ad
            autem ipsam nisi facilis? Rem eligendi, sunt exercitationem ipsa
            vitae veritatis voluptatibus ad enim?
          </Text>
        </Box>
      </Box>
    </section>
  );
}

export default IntroSection;
