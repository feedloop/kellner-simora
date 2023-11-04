'use client';

import { COLOR_PRIMARY, COLOR_PRIMARY_LIGHTER } from '@/constants/ui';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function BenefitIconItem({ icon, alt }: { icon: string; alt: string }) {
  return (
    <Box className='tw-p-[.5rem] tw-rounded-full' bgColor={'primary.50'}>
      <div
        className='tw-p-[.5rem] sm:tw-p-[.875rem] tw-rounded-full'
        style={{ backgroundColor: COLOR_PRIMARY }}
      >
        <Image src={icon} alt={alt} className='tw-min-w-[18px] sm:tw-min-w-[24px] tw-min-h-[18px] sm:tw-min-h-[24px]' width={24} height={24} />
      </div>
    </Box>
  );
}

export default BenefitIconItem;
