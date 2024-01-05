import { ContactImage } from '@/assets/images';
import {
  COLOR_GRAY_500,
  COLOR_PRIMARY,
  COLOR_PRIMARY_TEXT,
  COLOR_TEXT,
} from '@/constants/ui';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function FormSection() {
  return (
    <div className='tw-flex tw-justify-between tw-px-[1rem] tw-py-[4rem] sm:tw-p-24'>
      <Image
        src={ContactImage}
        alt='man-holding-phone'
        className='tw-hidden tw-w-1/2 sm:tw-block'
      />
      <div className='sm:tw-px-[3rem] sm:tw-py-[3.25rem]'>
        <Heading lineHeight={'2.75rem'} pb={'1.25rem'}>
          Kontak Kami
        </Heading>
        <Text fontSize={'1.25rem'} color={COLOR_GRAY_500}>
          Tim kami dengan senang hati akan membantu Anda.
        </Text>
        <VStack pt={'3rem'} gap={'1.5rem'} alignItems={'stretch'}>
          <Box
            display={'flex'}
            gap={{ base: '1.5rem' }}
            flexDir={{ base: 'column', sm: 'row' }}
          >
            <FormControl>
              <FormLabel color={COLOR_TEXT}>Nama</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl>
              <FormLabel color={COLOR_TEXT}>Email</FormLabel>
              <Input type='email' />
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Telepon (opsional)</FormLabel>
            <Input type='number' />
          </FormControl>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Topik</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Pesan (opsional)</FormLabel>
            <Textarea
              resize={'none'}
              rounded={'md'}
              border={'1px solid'}
              borderColor={'gray.300'}
              boxShadow={'sm'}
              _focus={{
                borderColor: 'primary.300',
                boxShadow: 'none',
                zIndex: 1,
              }}
              placeholder='Leave us a message...'
              size='sm'
            />
          </FormControl>
          <Button
            size={'lg'}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
          >
            Kirim
          </Button>
        </VStack>
      </div>
    </div>
  );
}

export default FormSection;
