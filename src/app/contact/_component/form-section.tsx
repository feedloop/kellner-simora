import { ContactImage } from '@/assets/images';
import {
  COLOR_GRAY_500,
  COLOR_PRIMARY,
  COLOR_PRIMARY_TEXT,
  COLOR_TEXT,
} from '@/constants/ui';
import {
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
    <div className='tw-flex tw-justify-between tw-p-24'>
      <Image src={ContactImage} alt='man-holding-phone' className='tw-w-1/2' />
      <div className='tw-px-[3rem] tw-py-[3.25rem]'>
        <Heading lineHeight={'2.75rem'} pb={'1.25rem'}>
          Kontak Kami
        </Heading>
        <Text fontSize={'1.25rem'} color={COLOR_GRAY_500}>
          Our friendly team would love to hear from you.
        </Text>
        <VStack pt={'3rem'} gap={'1.5rem'} alignItems={"stretch"}>
          <HStack>
            <FormControl>
              <FormLabel color={COLOR_TEXT}>Nama anda</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl>
              <FormLabel color={COLOR_TEXT}>Email</FormLabel>
              <Input type='email' />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Telepon (opsional)</FormLabel>
            <Input type='number' />
          </FormControl>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Subjek</FormLabel>
            <Input type='number' />
          </FormControl>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Telepon (opsional)</FormLabel>
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
          <Button size={"lg"} colorScheme='primary' style={{ background: COLOR_PRIMARY }}>
            Kirim
          </Button>
        </VStack>
      </div>
    </div>
  );
}

export default FormSection;
