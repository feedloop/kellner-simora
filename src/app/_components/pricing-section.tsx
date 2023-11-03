import { COLOR_TEXT } from '@/constants/ui';
import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PricingCard from './pricing-card';
import { PricingItems } from '@/constants/lists';

function PricingSection() {
  return (
    <section className='tw-py-[4rem] sm:tw-py-[6rem] tw-px-[1rem] sm:tw-px-[7rem] tw-relative'>
      <VStack className='tw-text-left sm:tw-text-center' alignItems={{base:"start",sm:"center"}}>
        <Text color={'primary.500'} fontWeight={'semibold'} fontSize={{base:".875rem"}}>Dari persiapan hingga penempatan</Text>
        <Heading as={'h2'} fontWeight={'semibold'} fontSize={{base:"1.875rem", sm:'2.25rem'}} lineHeight={'2.75rem'} letterSpacing={'-2%'}>Membantu Anda di tiap tahapnya</Heading>
        <Text color={COLOR_TEXT} fontSize={{base:'1.125rem',sm:'1.25rem'}} maxW={{sm:'60%'}} mx={{sm:'auto'}}>Kellner’s memiliki serangkaian layanan yang membantu Anda siap meraih peluang di Eropa</Text>
      </VStack>
      <Box display={"flex"} flexDir={{base:'column',sm:'row'}} mt={'4rem'} justifyContent={'space-between'} gap={'2rem'} alignItems={'stretch'}>
        {PricingItems.map((item)=>(
            <PricingCard key={crypto.randomUUID()} buttonLabel={item.buttonLabel} head={item.head} headDesc={item.headDesc} item={item.item}/>
        ))}
      </Box>
    </section>
  );
}

export default PricingSection;
