"use client"

import { FullLogo } from '@/assets/svgs';
import { SocialFooter } from '@/constants/lists';
import { COMPANY_NAME } from '@/constants/misc';
import Routes from '@/constants/routes';
import {
  COLOR_GRAY_500,
  COLOR_SNOW_LIGHTEST,
  COLOR_TEXT,
} from '@/constants/ui';
import { Divider, HStack, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: COLOR_SNOW_LIGHTEST }}>
      <section className='tw-flex tw-justify-between tw-px-[7rem] tw-py-[4rem]'>
        <div>
          <Image src={FullLogo} alt='full-logo-brand' />
          <Text color={COLOR_TEXT} lineHeight={'24px'} mt={'2rem'}>
            {COMPANY_NAME}
          </Text>
        </div>
        <div className='tw-font-semibold'>
          <Text
            fontSize={'sm'}
            lineHeight={'20px'}
            mb={'1rem'}
            color={COLOR_GRAY_500}
          >
            Sitemap
          </Text>
          <div className='tw-flex tw-flex-col tw-gap-3'>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Bidang Usaha
            </Link>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Mengapa Kelner
            </Link>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Kontak Kami
            </Link>
          </div>
        </div>
        <div className='tw-font-semibold'>
          <Text
            fontSize={'sm'}
            mb={'1rem'}
            lineHeight={'20px'}
            color={COLOR_GRAY_500}
          >
            Layanan Kami
          </Text>
          <div className='tw-flex tw-flex-col tw-gap-3'>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Kursus Bahasa Jerman
            </Link>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Kursus Bahasa Inggris
            </Link>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Bimbingan Belajar
            </Link>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Penempatan Kerja
            </Link>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Internship
            </Link>
            <Link color={COLOR_TEXT} href={Routes.Field}>
              Kuliah sambil Kerja
            </Link>
          </div>
        </div>
      </section>
      <Divider w={'80%'} mx={'auto'} />
      <section className='tw-flex tw-justify-between tw-px-[7rem] tw-py-[3rem]'>
        <Text color={COLOR_TEXT}>&copy; 2023 {COMPANY_NAME}. All right reserved. </Text>
        <HStack gap={"1.5rem"}>
          {SocialFooter.map((item) => (
            <Link href={item.link}>
              <Image alt={item.alt} src={item.image} />
            </Link>
          ))}
        </HStack>
      </section>
    </footer>
  );
}

export default Footer;
