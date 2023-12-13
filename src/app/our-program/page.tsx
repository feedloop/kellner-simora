'use client';

import Template from '@/components/template';
import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import OurProgramItem from './_components/our-program-item';
import { Programtems } from '@/constants/lists';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function Field() {
  const { push } = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  React.useEffect(() => {
    if (Boolean(section)) {
      push(`${path}#${section}`);
    }
  }, [section]);
  return (
    <Template>
      <section className='tw-w-full tw-px-[1rem] tw-py-[48px] sm:tw-px-[7rem]'>
        <VStack className='tw-text-center'>
          <Heading
            as={'h2'}
            fontWeight={'semibold'}
            fontSize={{ base: '2.25rem', sm: '3rem' }}
            lineHeight={'2.75rem'}
            letterSpacing={'-2%'}
          >
            Program Kami
          </Heading>
        </VStack>
      </section>

      <VStack mb={'6rem'} gap={'6rem'}>
        {Programtems.map((item) => (
          <OurProgramItem
            id={item.id}
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
