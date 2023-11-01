import { COLOR_TEXT } from '@/constants/ui';
import { HStack, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PricingCard from './pricing-card';
import { PricingItems } from '@/constants/lists';

function PricingSection() {
  return (
    <section className='tw-py-[6rem] tw-px-[7rem] tw-relative'>
      <VStack className='tw-text-center'>
        <Text color={'primary.500'} fontWeight={'semibold'}>Dari persiapan hingga penempatan</Text>
        <Heading as={'h2'} fontWeight={'semibold'} fontSize={'2.25rem'} lineHeight={'2.75rem'} letterSpacing={'-2%'}>Membantu Anda di tiap tahapnya</Heading>
        <Text color={COLOR_TEXT} fontSize={'1.25rem'} maxW={'60%'} mx={'auto'}>Kellner’s memiliki serangkaian layanan yang membantu Anda siap meraih peluang di Eropa</Text>
      </VStack>
      <HStack mt={'4rem'} justifyContent={'space-between'} gap={'2rem'} alignItems={'stretch'}>
        {PricingItems.map((item)=>(
            <PricingCard key={crypto.randomUUID()} buttonLabel={item.buttonLabel} head={item.head} headDesc={item.headDesc} item={item.item}/>
        ))}
      </HStack>
    </section>
  );
}

export default PricingSection;
