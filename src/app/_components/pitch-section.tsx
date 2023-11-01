import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHTER,
  COLOR_PRIMARY_TEXT,
} from '@/constants/ui';
import { Button, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function PitchSection() {
  return (
    <section className='tw-px-[7rem] tw-pb-[6rem] tw-relative'>
      <HStack alignItems={'center'} justifyContent={'space-between'} borderRadius={'1rem'} p={'4rem'} bgColor={COLOR_PRIMARY_LIGHTER}>
        <div>
          <Heading
            as={'h2'}
            fontSize={'1.875rem'}
            lineHeight={'2.375rem'}
            color={'white'}
            fontWeight={'semibold'}
          >
            Langkah awal Anda dimulai disini
          </Heading>
          <Text
            lineHeight={'1.875rem'}
            fontSize={'1.25rem'}
            color={'white'}
            fontWeight={400}
            mt={'1rem'}
          >
            Ikuti jejak 100+ orang yang telah berhasil meraih mimpinya
          </Text>
        </div>
        <HStack gap={'.75rem'}>
          <Button
            color={COLOR_PRIMARY_TEXT}
            colorScheme='whiteAlpha'
            style={{ background: 'white' }}
          >
            Pelajari Layanan
          </Button>
          <Button
            color={'white'}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
          >
            Daftar
          </Button>
        </HStack>
      </HStack>
    </section>
  );
}

export default PitchSection;
