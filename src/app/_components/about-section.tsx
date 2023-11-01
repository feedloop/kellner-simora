'use client';

import { AboutImage } from '@/assets/images';
import { COLOR_GRAY_900, COLOR_TEXT } from '@/constants/ui';
import { Button, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import AboutIconItem from './about-icon-item';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { AboutListItem } from '@/constants/lists';
import { LinePattern } from '@/assets/svgs';

function AboutSection() {
  return (
    <section className='tw-py-[6rem] tw-px-[7rem] tw-relative'>
      <div>
        <Text
          fontSize={'1rem'}
          fontWeight={'semibold'}
          lineHeight={'1.5rem'}
          color={'primary.500'}
        >
          Kenapa memilih Kellner'S
        </Text>
        <Heading
          as={'h2'}
          fontSize={'2.25rem'}
          fontWeight={'semibold'}
          lineHeight={'2.75rem'}
          mt={'.75rem'}
          mb={'1.25rem'}
        >
          Berpengalaman lebih dari 5 tahun
        </Heading>
        <Text
          lineHeight={'1.875rem'}
          fontSize={'1.25rem'}
          color={COLOR_TEXT}
          maxW={'80%'}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dictum neque ut scelerisque blandit. Maecenas hendrerit purus leo
        </Text>
      </div>
      <HStack mt={'5.375rem'}>
        <VStack gap={'3rem'}>
          {AboutListItem.map((item) => (
            <HStack alignItems={'start'}>
              <AboutIconItem icon={item.icon} alt='message-chat-icon' />
              <div>
                <Text
                  fontWeight={'semibold'}
                  color={COLOR_GRAY_900}
                  fontSize={'1.25rem'}
                >
                  {item.head}
                </Text>
                <Text fontSize={'1rem'}>{item.desc}</Text>
                <Button variant={'link'} color={'primary.500'} mt={'1.25rem'} rightIcon={<AiOutlineArrowRight/>}>{item.buttonLabel}</Button>
              </div>
            </HStack>
          ))}
        </VStack>
        <Image
          className='tw-w-1/2 tw-relative tw-z-10'
          src={AboutImage}
          alt='man-handshaking-with-other-people'
        />
      </HStack>
      <Image className='tw-absolute tw-bottom-0 tw-right-0' src={LinePattern} alt='line-pattern'/>
    </section>
  );
}

export default AboutSection;
