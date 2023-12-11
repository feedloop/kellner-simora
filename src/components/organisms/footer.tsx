'use client';

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
      <section className='tw-flex tw-flex-col tw-px-[1rem] tw-py-[4rem] sm:tw-flex-row sm:tw-px-[7rem]'>
        <div className='sm:tw-w-[50%]'>
          <Image src={FullLogo} alt='full-logo-brand' />
          <Text color={COLOR_TEXT} lineHeight={'24px'} mt={'2rem'}>
            {COMPANY_NAME}
          </Text>
        </div>
        <div className='tw-mt-[3rem] tw-flex tw-w-full tw-justify-between tw-gap-[2rem] sm:tw-mt-0 sm:tw-justify-start sm:tw-gap-[18rem]'>
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
              <Link color={COLOR_TEXT} href={Routes.WhyUs}>
                Mengapa Kellner
              </Link>
              <Link color={COLOR_TEXT} href={Routes.Contact}>
                Kontak kami
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
              <Link color={COLOR_TEXT} href={'#'}>
                Layanan Pengembangan Talenta
              </Link>
              <Link color={COLOR_TEXT} href={'#'}>
                Layanan Pengembangan Perusahaan
              </Link>
              <Link color={COLOR_TEXT} href={'#'}>
                Layanan Penempatan Talenta
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Divider w={'80%'} mx={'auto'} />
      <section className='tw-flex tw-flex-col-reverse tw-items-center tw-justify-between tw-gap-[1.5rem] tw-px-[1rem] tw-py-[3rem] sm:tw-flex-row sm:tw-px-[7rem]'>
        <Text color={COLOR_TEXT} textAlign={{ base: 'center', sm: 'left' }}>
          &copy; 2023 {COMPANY_NAME}. All right reserved.{' '}
        </Text>
        <HStack gap={'1.5rem'}>
          {SocialFooter.map((item) => (
            <Link key={crypto.randomUUID()} href={item.link}>
              <Image alt={item.alt} src={item.image} />
            </Link>
          ))}
        </HStack>
      </section>
    </footer>
  );
}

export default Footer;
