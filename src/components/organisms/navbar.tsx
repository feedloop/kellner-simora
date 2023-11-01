"use client"

import { Brand } from '@/assets/svgs';
import { Button, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Dropdown from '../atoms/dropdown';
import { NavDropdownItem } from '@/constants/lists';
import { COLOR_PRIMARY } from '@/constants/ui';

function Navbar() {
  return (
    <nav className='tw-flex tw-items-center tw-justify-between tw-px-20 tw-py-[.875rem]'>
      <span className='tw-flex tw-items-center tw-gap-5'>
        <Link href={'/'}>
          <Image src={Brand} alt='brand-logo' />
        </Link>
        <Link href={'/'} fontSize={'sm'} fontWeight={'semibold'} _hover={{color:'primary.500'}}>
            Beranda
        </Link>
        <Dropdown label='Tentang Kami' items={NavDropdownItem}/>
      </span>
      <Button textColor={'white'} style={{backgroundColor:COLOR_PRIMARY}}>Hubungi</Button>
    </nav>
  );
}

export default Navbar;
