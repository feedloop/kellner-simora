import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHTER,
  COLOR_PRIMARY_TEXT,
} from '@/constants/ui';
import { Box, Button, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function PitchSection() {
  return (
    <section className='tw-relative tw-px-[1rem] tw-pb-[4rem] sm:tw-pb-[6rem] sm:tw-px-[7rem]'>
      <Box
        display={'flex'}
        flexDir={{ base: 'column', sm: 'row' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderRadius={'1rem'}
        px={{ base: '1.5rem', sm: 0 }}
        py={{ base: '2.5rem', sm: 0 }}
        p={{ sm: '4rem' }}
        bgColor={COLOR_PRIMARY_LIGHTER}
      >
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
            fontSize={{ base: '1.125rem', sm: '1.25rem' }}
            color={'white'}
            fontWeight={400}
            mt={'1rem'}
          >
            Ikuti jejak 100+ orang yang telah berhasil meraih mimpinya
          </Text>
        </div>
        <Box
          mt={{base:"2rem",sm:0}}
          display={'flex'}
          flexDir={{ base: 'column-reverse', sm: 'row' }}
          gap={'.75rem'}
          w={{base:"full",sm:'fit-content'}}
          alignItems={{base:"stretch"}}
        >
          <Button
            color={COLOR_PRIMARY_TEXT}
            colorScheme='whiteAlpha'
            style={{ background: 'white' }}
            w={{base:"full", sm:"fit-content"}}
          >
            Pelajari Layanan
          </Button>
          <Button
            color={'white'}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
            w={{base:"full", sm:"fit-content"}}
          >
            Daftar
          </Button>
        </Box>
      </Box>
    </section>
  );
}

export default PitchSection;
