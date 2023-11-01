'use client';

import { Brand } from '@/assets/svgs';
import { Button, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Dropdown from '../atoms/dropdown';
import { NavDropdownItem } from '@/constants/lists';
import { COLOR_PRIMARY } from '@/constants/ui';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { isMobile } from 'react-device-detect';

function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  

  return (
    <motion.nav className='tw-flex tw-fixed tw-top-0 tw-left-0 tw-w-full tw-items-center tw-justify-between md:tw-px-20 tw-px-4 tw-py-[.875rem] tw-z-20'>
      <motion.div
        style={{ opacity }}
        className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-white tw-z-10'
      />
      <span className='tw-flex tw-relative tw-z-20 tw-items-center tw-gap-5'>
        <Link href={'/'} className='tw-bg-white tw-rounded-xl tw-p-3'>
          <Image src={Brand} alt='brand-logo' />
        </Link>
        <Link
          href={'/'}
          fontSize={'sm'}
          fontWeight={'semibold'}
          className='tw-hidden md:tw-block'
          _hover={{ color: 'primary.500' }}
        >
          Beranda
        </Link>
        <Dropdown
          label='Tentang Kami'
          items={NavDropdownItem}
          className='tw-hidden md:tw-block'
        />
      </span>
      <Button
        textColor={'white'}
        style={{ backgroundColor: COLOR_PRIMARY }}
        className='tw-hidden md:tw-block tw-z-10'
      >
        Hubungi
      </Button>
      <Button
        as={motion.button}
        fontSize={'lg'}
        variant={'ghost'}
        _hover={{ color: 'primary.500', backgroundColor: 'white' }}
        style={{color:isMobile ? COLOR_PRIMARY : 'white'}}
        className='tw-block md:tw-hidden tw-relative tw-z-20'
      >
        <GiHamburgerMenu />
      </Button>
    </motion.nav>
  );
}

export default Navbar;
