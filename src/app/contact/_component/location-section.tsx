import { Location } from '@/assets/svgs';
import { HQ_ADDRESS } from '@/constants/misc';
import { COLOR_PRIMARY, COLOR_TEXT } from '@/constants/ui';
import { Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function LocationSection() {
  return (
    <section className='tw-w-full tw-px-[7rem] tw-py-[6rem]'>
      <Heading
        fontSize={'3rem'}
        lineHeight={'3.75rem'}
        pb={'1.5rem'}
        fontWeight={'semibold'}
        textAlign={'center'}
      >
        Lokasi Kami
      </Heading>
      <Text
        color={COLOR_TEXT}
        fontSize={'1.25rem'}
        textAlign={'center'}
        lineHeight={'1.875rem'}
      >
        We have offices and teams all around the world.
      </Text>
      <div className='tw-mt-[6rem] tw-w-full'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75864.58760922217!2d86.90512291016583!3d27.987127260012382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2sid!4v1698893040740!5m2!1sen!2sid'
          width='100%'
          height='450'
          style={{ border: 0 }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='tw-flex tw-gap-4 tw-flex-col tw-items-center tw-justify-center tw-py-[4rem]'>
        <Image src={Location} alt='location-marker' />
        <div className='tw-text-center'>
          <Text fontSize={"1.25rem"} lineHeight={"1.875rem"} fontWeight={"semibold"}>Headquarter</Text>
          <Text>Senin - Sabtu. 09.00 - 18.00</Text>
        </div>
        <Text textAlign={"center"} color={"primary.500"} fontWeight={"semibold"} maxW={"30%"}>{HQ_ADDRESS}</Text>
      </div>
    </section>
  );
}

export default LocationSection;
