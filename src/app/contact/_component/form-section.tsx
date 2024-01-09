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
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import Image from 'next/image';
import React from 'react';

function FormSection() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const toast = useToast()

  const urlAPI = "https://api.elasticemail.com/v2/email/send?"
  const apiKey = "apikey=D1E7F3974433F1828E1334EFF88B1ABBF21BE069A62CEE700D9361EACD3BE3F0F0B0C9B07F3D496321D0013C9737B52A&"
  const apiFrom = "no-reply@kellnersimora.com"
  const apiTo = "support@kellnersimora.com"
  const apiIsTransactional = "true"
  const apiMassageValue = "<table><tr><td><b>Nama</b></td><td>: "+name+"</td></tr><tr><td><b>Telepon</b></td><td>: "+phone+"</td></tr><tr><td><b>Email</b></td><td>: "+email+"</td></tr><tr><td><b>Isi Pesan</b></td><td>: </td></tr></table><p>"+message+"</p>"
  const handle = async (e:any) => {
    setLoading(true)
    await axios.post(urlAPI+apiKey+"subject=New contact form submission: "+subject+"&from="+apiFrom+"&to="+apiTo+"&bodyText="+message+"&isTransactional="+apiIsTransactional+"&bodyHtml="+apiMassageValue)
    .then(function (response) {
      if (response.data.success) {
        setLoading(false)
        setName('')
        setEmail('')
        setPhone('')
        setSubject('')
        setMessage('')
        toast({
          title: 'Berhasil',
          description: "Pesan anda telah terkirim.",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
      }else{
        toast({
          title: 'Gagal',
          description: "Silahkan isi form dengan sesuai.",
          status: 'error',
          duration: 1000,
          isClosable: true,
        })
      }
      
    })
    .catch(function (error) {
      console.log(error);      
      toast({
        title: 'Gagal',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
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
        <VStack pt={'3rem'} gap={'1.5rem'} alignItems={'stretch'}>
          <Box
            display={'flex'}
            gap={{ base: '1.5rem' }}
            flexDir={{ base: 'column', sm: 'row' }}
          >
            <FormControl isRequired>
              <FormLabel color={COLOR_TEXT}>Nama</FormLabel>
              <Input type='text' placeholder='Masukkan Nama Anda' value={name} onChange={e => setName(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={COLOR_TEXT}>Email</FormLabel>
              <Input type='email' placeholder='Masukkan Email Anda' value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel color={COLOR_TEXT}>Telepon (opsional)</FormLabel>
            <Input type='number' placeholder='Masukkan Nomor Telepon Anda' value={phone} onChange={e => setPhone(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={COLOR_TEXT}>Topik</FormLabel>
            <Input type='text' placeholder='Masukkan Topik' value={subject} onChange={e => setSubject(e.target.value)} />
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
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </FormControl>
          <Button
            size={'lg'}
            colorScheme='primary'
            style={{ background: COLOR_PRIMARY }}
            type='submit'
            onClick={handle}
            isLoading={loading}
          >
            Kirim
          </Button>
        </VStack>
      </div>
    </div>
  );
}

export default FormSection;
