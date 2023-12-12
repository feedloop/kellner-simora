import { CtaImage } from '@/assets/images';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '@/constants/ui';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function CtaSection() {
  return (
    <section className='tw-relative tw-px-[1rem] tw-py-[3rem] sm:tw-px-[7rem] sm:tw-py-[4rem] sm:tw-pb-[6rem]'>
      <Box
        display={'flex'}
        flexDir={{ base: 'column', sm: 'row' }}
        alignItems={'stretch'}
        justifyContent={'space-between'}
        borderRadius={'1rem'}
        bgColor={COLOR_SECONDARY}
      >
        <div className='tw-px-[1.5rem] tw-py-[2.5rem] sm:tw-p-16'>
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
            Ikuti jejak 100+ orang yang telah berhasil meraih mimpinya.
          </Text>
          <Button
            color={'white'}
            mt={{ base: '2rem', sm: '2.5rem' }}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
          >
            Daftar pelatihan
          </Button>
        </div>
        <Image
          src={CtaImage}
          className='tw-h-fill tw-rounded-b-2xl tw-object-fill sm:tw-rounded-r-2xl'
          alt='woman-smiling-in-conversation'
        />
      </Box>
    </section>
  );
}

export default CtaSection;
