'use client';

import { AboutImage } from '@/assets/images';
import { COLOR_GRAY_900, COLOR_TEXT } from '@/constants/ui';
import { Button, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import AboutIconItem from './about-icon-item';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AboutListItem } from '@/constants/lists';
import { LinePattern } from '@/assets/svgs';

function AboutSection() {
  return (
    <section className='tw-relative tw-px-[1rem] sm:tw-px-[7rem] tw-py-[4rem] sm:tw-py-[6rem]'>
      <div>
        <Text
          fontSize={{base:".875rem", sm:'1rem'}}
          fontWeight={'semibold'}
          lineHeight={'1.5rem'}
          color={'primary.500'}
        >
          Kenapa memilih Kellner'S
        </Text>
        <Heading
          as={'h2'}
          fontSize={{base:'1.875rem', sm:'2.25rem'}}
          fontWeight={'semibold'}
          lineHeight={'2.75rem'}
          mt={'.75rem'}
          mb={{base:"1rem", sm:'1.25rem'}}
        >
          Berpengalaman lebih dari 5 tahun
        </Heading>
        <Text
          lineHeight={{base:'1.75rem', sm:'1.875rem'}}
          fontSize={{base:'1.125rem', sm:'1.25rem'}}
          color={COLOR_TEXT}
          maxW={{sm:'80%'}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dictum neque ut scelerisque blandit. Maecenas hendrerit purus leo
        </Text>
      </div>
      <HStack px={{base:'.5rem',sm:0}} mt={{base:"3rem", sm:'5.375rem'}}>
        <VStack gap={'3rem'}>
          {AboutListItem.map((item) => (
            <HStack key={crypto.randomUUID()} alignItems={'start'}>
              <AboutIconItem icon={item.icon} alt='message-chat-icon' />
              <div>
                <Text
                  fontWeight={'semibold'}
                  color={COLOR_GRAY_900}
                  fontSize={{base:'1.125rem', sm:'1.25rem'}}
                >
                  {item.head}
                </Text>
                <Text fontSize={'1rem'}>{item.desc}</Text>
                <Button
                  variant={'link'}
                  color={'primary.500'}
                  mt={'1.25rem'}
                  rightIcon={<AiOutlineArrowRight />}
                >
                  {item.buttonLabel}
                </Button>
              </div>
            </HStack>
          ))}
        </VStack>
        <Image
          className='tw-relative tw-hidden sm:tw-block tw-z-10 tw-w-1/2'
          src={AboutImage}
          alt='man-handshaking-with-other-people'
        />
      </HStack>
      <Image
        className='tw-absolute tw-hidden sm:tw-block tw-bottom-0 tw-right-0'
        src={LinePattern}
        alt='line-pattern'
      />
    </section>
  );
}

export default AboutSection;
