"use client";
import { ContactImage } from '@/assets/images';
import { COLOR_GRAY_500, COLOR_PRIMARY, COLOR_TEXT } from '@/constants/ui';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import axios from "axios";
import Image from 'next/image';
import React from 'react';

function FormSection() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const urlAPI = "https://api.elasticemail.com/v2/email/send?"
  const apiKey = "apikey=D1E7F3974433F1828E1334EFF88B1ABBF21BE069A62CEE700D9361EACD3BE3F0F0B0C9B07F3D496321D0013C9737B52A&"
  const apiFrom = "no-reply@kellnersimora.com"
  const apiIsTransactional = "true"
  const handle = async (e:any) => {
    await axios.post(urlAPI+apiKey+"subject="+subject+"&from="+apiFrom+"&to=support@kellnersimora.com&bodyText="+message+"&isTransactional="+apiIsTransactional+"&bodyHtml=<p>"+"Nama: "+name+"<br />"+"Telepon: "+phone+"<br />"+"Pesan: "+"<br />"+message+"</p>")
    .then(function (response) {
      alert("Pesan terkirim");
    })
    .catch(function (error) {
      alert("Pesan gagal dikirim");
    });
  }

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
        <form onSubmit={handle}>
        <VStack pt={'3rem'} gap={'1.5rem'} alignItems={'stretch'}>
          <Box
            display={'flex'}
            gap={{ base: '1.5rem' }}
            flexDir={{ base: 'column', sm: 'row' }}
          >
            <FormControl isRequired>
              <FormLabel color={COLOR_TEXT}>Nama</FormLabel>
              <Input type='text' placeholder='Masukkan Nama Anda' onChange={e => setName(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={COLOR_TEXT}>Email</FormLabel>
              <Input type='email' placeholder='Masukkan Email Anda' onChange={e => setEmail(e.target.value)} />
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Telepon (opsional)</FormLabel>
            <Input type='number' placeholder='Masukkan Nomor Telepon Anda' onChange={e => setPhone(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={COLOR_TEXT}>Topik</FormLabel>
            <Input type='text' placeholder='Masukkan Topik' onChange={e => setSubject(e.target.value)} />
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
              placeholder='Masukkan Isi Pesan Anda'
              size='sm'
              onChange={e => setMessage(e.target.value)}
            />
          </FormControl>
          <Button
            size={'lg'}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
            type='submit'
          >
            Kirim
          </Button>
        </VStack>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
