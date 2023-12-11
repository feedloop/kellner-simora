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
      <span className='tw-relative tw-z-20 tw-flex tw-items-center tw-gap-5'>
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
          Beranda
        </Link>
        <Dropdown
          label='Tentang Kami'
          items={NavDropdownItem}
          display={{ base: 'none', sm: 'block' }}
        />
        {/* <Dropdown
          label='Program Kami'
          items={NavDropdownOurPrograms}
          display={{ base: 'none', sm: 'block' }}
        /> */}
      </span>
      <button
        style={{ color: 'white' }}
        className='tw-relative tw-z-10 tw-block tw-text-xl sm:tw-hidden'
      >
        <GiHamburgerMenu />
      </button>
    </motion.nav>
  );
}

export default Navbar;
