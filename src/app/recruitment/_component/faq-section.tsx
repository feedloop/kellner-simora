'use client';

import { COLOR_TEXT } from '@/constants/ui';
import { Accordion, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import FaqItem from './faq-item';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function FaqSection() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className='tw-relative tw-px-[1rem] sm:tw-px-[7rem]'>
      <Heading as={'h2'} fontWeight={'semibold'} textAlign={'center'}>
        Pertanyaan
      </Heading>
      <Text
        textAlign={'center'}
        fontSize={'1.25rem'}
        mt={'1.25rem'}
        color={COLOR_TEXT}
      >
        Lorem ipsum dolor sit amet.
      </Text>
      <Accordion
        onChange={(index) =>
          push(
            pathname + '?' + createQueryString('faqOpen', index.toString()),
            { scroll: false }
          )
        }
        w={{sm:'48rem'}}
        mx={'auto'}
        allowToggle
      >
        <VStack
          divider={<Divider />}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <FaqItem index={0}/>
          <FaqItem index={1}/>
        </VStack>
      </Accordion>
    </section>
  );
}

export default FaqSection;
