'use client';

import { Check } from '@/assets/svgs';
import { COLOR_PRIMARY, COLOR_TEXT } from '@/constants/ui';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link'
import Image from 'next/image';
import React from 'react';

export type PricingCardType = {
  head: string;
  headDesc: string;
  item: string[];
  link: string;
  buttonLabel: string;
  buttonEvent?: () => void;
};
export type TestimonialType = {
  headDesc: string;
  title: string;
};

function PricingCard({
  buttonEvent,
  buttonLabel,
  link,
  head,
  headDesc,
  item = [],
}: PricingCardType) {
  return (
    <Card
      maxW={{ sm: '24rem' }}
      w={{ sm: '33%' }}
      boxShadow={
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);'
      }
    >
      <CardHeader>
        <Text
          fontSize={head.length > 20 ? '1.25rem' : '1.5rem'}
          lineHeight={'1.875rem'}
          fontWeight={'semibold'}
          textAlign={'center'}
        >
          {head}
        </Text>
        <Text color={COLOR_TEXT} fontWeight={400} textAlign={'center'}>
          {headDesc}
        </Text>
      </CardHeader>
      <CardBody position={'relative'} pb={'7rem'}>
        <VStack justifyContent={'flex-start'} alignItems={'flex-start'}>
          {item.map((point) => (
            <HStack
              key={crypto.randomUUID()}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              mx={'1rem'}
              gap={'.75rem'}
            >
              <Image src={Check} alt='check-icon' />
              <Text>{point}</Text>
            </HStack>
          ))}
        </VStack>
        <HStack
          position={'absolute'}
          w={'full'}
          left={0}
          bottom={'2rem'}
          justifyContent={'center'}
          cursor={'pointer'}
          mt={'4rem'}
        >
                <NextLink href={link} passHref>
          <Button
            variant={'solid'}
            as={Button}
            color={'white'}
            mx={'auto'}
            onClick={buttonEvent}
            className='tw-cursor-pointer'
            style={{ background: COLOR_PRIMARY }}
          >
            {buttonLabel}
          </Button>
          </NextLink>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default PricingCard;
