import { COLOR_TEXT } from '@/constants/ui';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PricingCard from './pricing-card';
import { PricingItems } from '@/constants/lists';

function PricingSection() {
  return (
    <section className='tw-relative tw-px-[1rem] tw-py-[4rem] sm:tw-px-[7rem] sm:tw-py-[6rem]'>
      <VStack
        className='tw-text-left sm:tw-text-center'
        alignItems={{ base: 'start', sm: 'center' }}
      >
        <Text
          color={'primary.500'}
          fontWeight={'semibold'}
          fontSize={{ base: '.875rem' }}
        >
          Dari persiapan hingga penempatan
        </Text>
        <Heading
          as={'h2'}
          fontWeight={'semibold'}
          fontSize={{ base: '1.875rem', sm: '2.25rem' }}
          lineHeight={'2.75rem'}
          letterSpacing={'-2%'}
        >
          Membantu Anda di setiap tahapan
        </Heading>
        <Text
          color={COLOR_TEXT}
          fontSize={{ base: '1.125rem', sm: '1.25rem' }}
          maxW={{ sm: '60%' }}
          mx={{ sm: 'auto' }}
        >
          Kembangkan potensi Anda dengan serangkaian layanan kami
        </Text>
      </VStack>
      <Box
        display={'flex'}
        flexDir={{ base: 'column', sm: 'row' }}
        mt={'4rem'}
        justifyContent={'space-between'}
        gap={'2rem'}
        alignItems={'stretch'}
      >
        {PricingItems.map((item) => (
          <PricingCard
            key={crypto.randomUUID()}
            buttonLabel={item.buttonLabel}
            head={item.head}
            headDesc={item.headDesc}
            item={item.item}
            link={item.link}
          />
        ))}
      </Box>
    </section>
  );
}

export default PricingSection;
