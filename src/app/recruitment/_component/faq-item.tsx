import { COLOR_TEXT } from '@/constants/ui';
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

function FaqItem({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  const searchParams = useSearchParams();
  const activeFaq = searchParams.get('faqOpen');

  return (
    <AccordionItem w={'full'} border={0} py={'1.5rem'}>
      <AccordionButton>
        <Box as='span' fontWeight={'semibold'} flex='1' textAlign='left'>
          {question}
        </Box>
        {activeFaq !== index.toString() ? (
          <span style={{ color: COLOR_TEXT }}>
            <AiOutlinePlusCircle />
          </span>
        ) : (
          <span style={{ color: COLOR_TEXT }}>
            <AiOutlineMinusCircle />
          </span>
        )}
      </AccordionButton>
      <AccordionPanel pb={4} color={COLOR_TEXT}>
        {answer}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default FaqItem;
