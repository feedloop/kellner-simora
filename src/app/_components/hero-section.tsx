import { HeroImage } from '@/assets/images';
import { COLOR_PRIMARY, COLOR_PRIMARY_LIGHTER, COLOR_PRIMARY_TEXT } from '@/constants/ui';
import { Button, HStack, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

function HeroSection() {
  return (
    <section style={{backgroundColor:COLOR_PRIMARY_LIGHTER}} className='tw-min-h-screen tw-w-full tw-flex tw-flex-col tw-justify-center tw-px-[7rem] tw-relative'>
        <Image src={HeroImage} alt='big-hero-img' className='tw-absolute tw-right-0 tw-top-0 tw-w-1/2'/>
        <div className='tw-relative tw-z-10'>
        <Text fontSize={'1.5rem'} color={'white'} fontWeight={700}>Kellner'S</Text>
        <Heading fontSize={'4.5rem'} color={'white'} lineHeight={'4.84375rem'} maxW={'37.5rem'}>Bukan mimpi, semua bisa ke Eropa!</Heading>
        <Text mt={'1.5rem'} color={'white'} fontSize={'1.25rem'}>Kami adalah rekan sekerja dalam mewujudkan mimpi Anda.</Text>
        <HStack gap={'.75rem'} mt={'3rem'}>
            <Button color={COLOR_PRIMARY_TEXT} size={'lg'} colorScheme='whiteAlpha' style={{background:'white'}}>Kenali Kami</Button>
            <Button color={'white'} size={'lg'} colorScheme='primary' style={{background:COLOR_PRIMARY}}>Daftar</Button>
        </HStack>
        </div>

    </section>
  )
}

export default HeroSection;