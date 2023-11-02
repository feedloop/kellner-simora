import { COLOR_PRIMARY, COLOR_TEXT } from '@/constants/ui';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import toKebabCase from '@/utils/toCamelCase';

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
    <section className='tw-flex tw-justify-between tw-gap-[4rem] tw-px-[7rem]'>
      <Box maxW={'50%'}>
        <Text fontWeight={'semibold'} color={'primary.500'}>
          {smallHead}
        </Text>
        <Heading as={'h2'} fontWeight={'semibold'} mt={'.75rem'}>
          {head}
        </Heading>
        <Box lineHeight={'1.75rem'} color={COLOR_TEXT} my={'2.5rem'}>
          {content}
        </Box>
        <Button
          colorScheme='primary'
          onClick={buttonEvent}
          style={{ background: COLOR_PRIMARY }}
        >
          {buttonLabel}
        </Button>
      </Box>
      <Image src={imageUrl} alt={toKebabCase(head)} />
    </section>
  );
}

export default FieldItem;
