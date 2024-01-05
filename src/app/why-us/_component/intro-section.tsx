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
          Mengapa Memilih Kellner
        </Heading>
        <Text
          color={COLOR_TEXT}
          fontSize={{ base: '1.125rem', sm: '1.25rem' }}
          maxW={{ sm: '80%' }}
          mx={'auto'}
        >
          Kami percaya bahwa Indonesia memiliki peran besar dalam membuat dunia
          ini lebih baik, berlandaskan nilai-nilai, sumber daya alam, dan tidak
          lupa juga dengan talenta-talentanya.
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
            Kellner Simora Internasional berbagi visi yang sama yaitu Indonesia
            Emas 2045, Indonesia menjadi negara maju pada tahun 2045, dan karena
            itu kita mendukung penuh dengan cara mengembangkan bakat talenta dan
            organisasi lokal. Kami berkomitmen pada pembentukan dan pemberdayaan
            bakat anak muda Indonesia dengan keterampilan yang sesuai dengan
            misi industri, digital, dan global untuk mengatasi kurangnya talenta
            kelas dunia di Indonesia.
          </Text>
          <Text lineHeight={{ base: '1.5rem', sm: '1.75rem' }}>
            Misi kami, 'Membentuk Talenta dan Organisasi Kelas Dunia untuk
            Indonesia', mencerminkan dedikasi kami dalam mengembangkan pemimpin
            masa depan. Kami juga menyadari pentingnya perekrutan profesional
            dari luar untuk percepatan pertumbuhan perusahaan, di mana
            mengintegrasikan mereka dengan cepat ke dalam organisasi mendukung
            pertumbuhan Indonesia menuju status negara maju pada tahun 2045.
          </Text>
        </Box>
      </Box>
    </section>
  );
}

export default IntroSection;
