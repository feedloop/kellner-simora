'use client';

import { AboutImage } from '@/assets/images';
import { COLOR_GRAY_900, COLOR_TEXT } from '@/constants/ui';
import { Button, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link'
import Image from 'next/image';
import React from 'react';
import AboutIconItem from './about-icon-item';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AboutListItem } from '@/constants/lists';
import { CirclePatternGray } from '@/assets/svgs';

function AboutSection() {
  return (
    <section className='tw-relative tw-px-[1rem] tw-py-[4rem] sm:tw-px-[7rem] sm:tw-py-[6rem]'>
      <div>
        <Text
          fontSize={{ base: '.875rem', sm: '1rem' }}
          fontWeight={'semibold'}
          lineHeight={'1.5rem'}
          color={'primary.500'}
        >
          Mengapa memilih Kellner?
        </Text>
        <Heading
          as={'h2'}
          fontSize={{ base: '1.875rem', sm: '2.25rem' }}
          fontWeight={'semibold'}
          lineHeight={'2.75rem'}
          mt={'.75rem'}
          mb={{ base: '1rem', sm: '1.25rem' }}
        >
          Berpengalaman lebih dari 5 tahun
        </Heading>
        <Text
          lineHeight={{ base: '1.75rem', sm: '1.875rem' }}
          fontSize={{ base: '1.125rem', sm: '1.25rem' }}
          color={COLOR_TEXT}
          maxW={{ sm: '95%' }}
        >
          Dengan lebih dari 5 tahun pengalaman, kami telah sukses membantu
          individu memperoleh pengalaman magang yang berharga di Eropa. Kami
          fokus pada memberikan kesempatan berharga yang memungkinkan
          pengembangan keterampilan dan persiapan karier yang kokoh.
        </Text>
      </div>
      <HStack
        px={{ base: '.5rem', sm: 0 }}
        mt={{ base: '3rem', sm: '5.375rem' }}
      >
        <VStack gap={'3rem'}>
          {AboutListItem.map((item) => (
            <HStack key={crypto.randomUUID()} alignItems={'start'}>
              <AboutIconItem icon={item.icon} alt='message-chat-icon' />
              <div>
                <Text
                  fontWeight={'semibold'}
                  color={COLOR_GRAY_900}
                  fontSize={{ base: '1.125rem', sm: '1.25rem' }}
                >
                  {item.head}
                </Text>
                <Text fontSize={'1rem'}>{item.desc}</Text>
                <NextLink href={item.link}>
                  <Button
                    variant={'link'}
                    color={'primary.500'}
                    mt={'1.25rem'}
                    rightIcon={<AiOutlineArrowRight />}
                  >
                    {item.buttonLabel}
                  </Button>
                </NextLink>
              </div>
            </HStack>
          ))}
        </VStack>
        <Image
          className='tw-relative tw-z-10 tw-hidden tw-w-1/2 tw-rounded-[32px] sm:tw-block'
          src={AboutImage}
          alt='people-discuss'
        />
      </HStack>
      <Image
        className='tw-absolute tw-bottom-0 tw-right-0 tw-hidden sm:tw-block'
        src={CirclePatternGray}
        alt='line-pattern'
      />
    </section>
  );
}

export default AboutSection;
