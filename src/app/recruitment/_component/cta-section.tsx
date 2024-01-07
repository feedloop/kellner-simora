import { CtaImage } from '@/assets/images';
import { COLOR_WHATSAPP, COLOR_SECONDARY } from '@/constants/ui';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
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
          <NextLink href="https://wa.me/62811125838" target='_blank' passHref>
            <Button
              leftIcon={<FaWhatsapp />}
              color={'white'}
              colorScheme='primary'
              style={{ background: COLOR_WHATSAPP }}
              w={{ base: 'full', sm: 'fit-content' }}
            >
              Daftar pelatihan via Whatsapp
            </Button>
          </NextLink>
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
