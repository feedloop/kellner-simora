'use client';

import { Brand } from '@/assets/svgs';
import { Link } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Dropdown from '../atoms/dropdown';
import { NavDropdownItem, NavDropdownOurPrograms } from '@/constants/lists';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

function Navbar() {
  const { scrollY } = useScroll();
  const path = usePathname();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const color = useTransform(
    scrollY,
    [0, 100],
    [path !== '/' ? '#000' : '#fff', '#000']
  );

  return (
    <motion.nav
      className={twMerge(
        `tw-fixed tw-left-0 tw-top-0 tw-z-20 tw-flex tw-w-full tw-items-center tw-justify-between tw-px-4 tw-py-[.875rem] sm:tw-px-20`,
        path !== '/' && 'tw-sticky'
      )}
    >
      <motion.div
        style={{ opacity }}
        className='tw-absolute tw-left-0 tw-top-0 tw-z-10 tw-h-full tw-w-full tw-bg-white'
      />
      <span className='tw-relative tw-z-20 tw-flex tw-items-center tw-gap-[32px]'>
        <Link href={'/'} className='tw-rounded-xl tw-bg-white tw-p-3'>
          <Image src={Brand} alt='brand-logo' />
        </Link>
        <Link
          href={'/'}
          fontSize={'sm'}
          fontWeight={'semibold'}
          className='tw-hidden sm:tw-block'
          _hover={{ color: 'primary.500' }}
        >
          <motion.span style={{ color }}>Beranda</motion.span>
        </Link>
        <Dropdown
          label='Tentang Kami'
          items={NavDropdownItem}
          display={{ base: 'none', sm: 'block' }}
        />

        <Dropdown
          label='Program Kami'
          items={NavDropdownOurPrograms}
          display={{ base: 'none', sm: 'block' }}
        />
      </span>
      <motion.button
        style={{ color }}
        className='tw-relative tw-z-10 tw-block tw-text-xl sm:tw-hidden'
      >
        <GiHamburgerMenu />
      </motion.button>
    </motion.nav>
  );
}

export default Navbar;
