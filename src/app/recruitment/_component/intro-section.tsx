import { ChefImage } from '@/assets/images';
import { COLOR_TEXT } from '@/constants/ui';
import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function IntroSection() {
  return (
    <section className='tw-w-full tw-px-[1rem] tw-pt-[6rem] sm:tw-px-[7rem]'>
      <VStack className='tw-text-center'>
        <Text w='100%' color={'primary.500'} fontWeight={'semibold'}>
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
          Pendekatan Holistik dalam Pembelajaran dan Pengembangan Profesional.
        </Text>
      </VStack>
      <HStack display={{ base: 'none', sm: 'flex' }} gap={'4rem'} py={'6rem'}>
        <Image src={ChefImage} alt='chef-smiling' />
        <Box display={'flex'} flexDir={'column'} gap={'.5rem'} maxW={'50%'}>
          <Text lineHeight={'1.75rem'}>
            Program Intake Industri adalah program pelatihan untuk karyawan baru
            yang baru lulus dari universitas atau memiliki pengalaman kerja
            kurang dari 2 tahun. Program ini bertujuan untuk memberikan
            keterampilan dan pengetahuan kepada talenta-talenta ini yang akan
            dipekerjakan atau baru bergabung dengan perusahaan, yang akan mereka
            gunakan dalam peran baru mereka di perusahaan baru. Tujuan kami
            adalah untuk mempersiapkan talenta-talenta ini agar perusahaan dapat
            segera mempekerjakan karyawan baru ini tanpa proses orientasi yang
            panjang.
          </Text>
          <Text lineHeight={'1.75rem'}>
            Kami telah mengidentifikasi peran-peran berikut yang akan menjadi
            karyawan baru di perusahaan Anda dalam tahun fiskal ini atau yang
            akan datang. Kami akan membekali mereka dengan keterampilan terkini
            dan kelas dunia sehingga mereka dapat mulai bekerja secara efektif
            dan efisien untuk keuntungan perusahaan Anda. Setiap peran akan
            dilatih dan dikembangkan menggunakan daftar kursus terkurasi yang
            telah terbukti sangat digunakan dan efektif untuk memastikan
            keberhasilan peran dalam mencapai tujuannya.
          </Text>
        </Box>
      </HStack>
    </section>
  );
}

export default IntroSection;
