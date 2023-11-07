import Template from '@/components/template';
import { COLOR_TEXT } from '@/constants/ui';
import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import FieldItem from './_components/field-item';
import { FieldItems } from '@/constants/lists';

function Field() {
  return (
    <Template>
      <section className='tw-w-full tw-px-[1rem] sm:tw-px-[7rem] tw-py-[6rem]'>
        <VStack className='tw-text-center'>
          <Text color={'primary.500'} fontWeight={'semibold'}>
            Tentang Kami
          </Text>
          <Heading
            as={'h2'}
            fontWeight={'semibold'}
            fontSize={{base:'2.25rem', sm:'3rem'}}
            lineHeight={'2.75rem'}
            letterSpacing={'-2%'}
          >
            Bidang Usaha
          </Heading>
          <Text
            color={COLOR_TEXT}
            fontSize={'1.25rem'}
            maxW={{sm:'60%'}}
            mx={'auto'}
          >
            Kellner Simora International have 2 main services to be offered to Indonesian companies and talents.
          </Text>
        </VStack>
      </section>
      <VStack mb={'6rem'} gap={'6rem'}>
        {FieldItems.map((item) => (
          <FieldItem
            buttonLabel={item.buttonLabel}
            content={item.content}
            head={item.head}
            imageUrl={item.imageUrl}
            smallHead={item.smallHead}
            key={crypto.randomUUID()}
          />
        ))}
      </VStack>
    </Template>
  );
}

export default Field;
