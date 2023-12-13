import { COLOR_TEXT } from '@/constants/ui';
import { Box, Heading, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import toKebabCase from '@/utils/toCamelCase';

export type FieldItemType = {
  smallHead: string;
  head: string;
  content: string | React.ReactNode;
  imageUrl: string | StaticImageData;
  id: string;
};

function OurProgramItem({
  smallHead,
  head,
  content,
  imageUrl,
  id,
}: FieldItemType) {
  return (
    <section
      /// https://stackoverflow.com/a/70745758/18038473
      id={id}
      /// https://stackoverflow.com/a/74145012/18038473
      className='tw-flex tw-flex-col tw-justify-between tw-gap-[3rem] tw-px-[1rem] tw-pt-[90px] sm:tw-flex-row sm:tw-gap-[4rem] sm:tw-px-[7rem]'
    >
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
      </Box>
      <Box>
        <Image src={imageUrl} alt={toKebabCase(head)} />
      </Box>
    </section>
  );
}

export default OurProgramItem;
