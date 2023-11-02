import { AboutListItem } from '@/constants/lists';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import BenefitIconItem from './benefit-icon-item';
import { COLOR_GRAY_900 } from '@/constants/ui';
import Image from 'next/image';
import { AboutImage } from '@/assets/images';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { LinePattern } from '@/assets/svgs';

function BenefitSection() {
  return (
    <section className='tw-relative tw-w-full tw-px-[7rem] tw-pb-[6rem]'>
      <HStack mt={'5.375rem'}>
        <VStack gap={'3rem'}>
          {AboutListItem.map((item) => (
            <HStack key={crypto.randomUUID()} alignItems={'start'}>
              <BenefitIconItem icon={item.icon} alt='message-chat-icon' />
              <div>
                <Text
                  fontWeight={'semibold'}
                  color={COLOR_GRAY_900}
                  fontSize={'1.25rem'}
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
          className='tw-relative tw-z-10 tw-w-1/2'
          src={AboutImage}
          alt='man-handshaking-with-other-people'
        />
      </HStack>
      <Image
        className='tw-absolute tw-bottom-0 tw-right-0'
        src={LinePattern}
        alt='line-pattern'
      />
    </section>
  );
}

export default BenefitSection;
