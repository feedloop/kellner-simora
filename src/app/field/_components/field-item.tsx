import { COLOR_PRIMARY, COLOR_TEXT } from '@/constants/ui';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import toKebabCase from '@/utils/toCamelCase';
import { isMobile } from 'react-device-detect';

export type FieldItemType = {
  smallHead: string;
  head: string;
  content: string | React.ReactNode;
  imageUrl: string | StaticImageData;
  buttonLabel: string;
  buttonEvent?: () => void;
};

function FieldItem({
  smallHead,
  head,
  content,
  buttonLabel,
  buttonEvent,
  imageUrl,
}: FieldItemType) {
  return (
    <section className='tw-flex tw-flex-col tw-justify-between tw-gap-[3rem] sm:tw-gap-[4rem] tw-px-[1rem] sm:tw-flex-row sm:tw-px-[7rem]'>
      <Box maxW={{ sm: '50%' }}>
        <Text
          fontWeight={'semibold'}
          fontSize={{ base: '.875rem', sm: '1rem' }}
          color={'primary.500'}
        >
          {smallHead}
        </Text>
        <Heading
          as={'h2'}
          fontWeight={'semibold'}
          fontSize={{ base: '1.875rem', sm: '2.25rem' }}
          mt={'.75rem'}
        >
          {head}
        </Heading>
        <Box lineHeight={'1.75rem'} color={COLOR_TEXT} my={'2.5rem'}>
          {content}
        </Box>
        <Button
          display={{ base: 'none', sm: 'block' }}
          colorScheme={'primary'}
          onClick={buttonEvent}
          variant={{ sm: 'solid' }}
          style={{background:COLOR_PRIMARY}}
        >
          {buttonLabel}
        </Button>
        <Button display={{ base: 'block', sm: 'none' }} variant={'outline'} w={"full"}>
          {buttonLabel}
        </Button>
      </Box>
      <Image src={imageUrl} alt={toKebabCase(head)} />
    </section>
  );
}

export default FieldItem;
