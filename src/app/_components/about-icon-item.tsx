'use client';

import { COLOR_PRIMARY } from '@/constants/ui';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function AboutIconItem({ icon, alt }: { icon: string; alt: string }) {
  return (
    <Box className='tw-rounded-full tw-p-[.5rem]' bgColor={'primary.50'}>
      <div
        className='tw-rounded-full tw-p-[.5rem] sm:tw-p-[.875rem]'
        style={{ backgroundColor: COLOR_PRIMARY }}
      >
        <Image
          src={icon}
          alt={alt}
          className='tw-min-h-[18px] tw-min-w-[18px] sm:tw-min-h-[24px] sm:tw-min-w-[24px]'
          width={24}
          height={24}
        />
      </div>
    </Box>
  );
}

export default AboutIconItem;
