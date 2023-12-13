import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
} from '@chakra-ui/react';
import React from 'react';

function AccordionComponent({ list }: { list: [] | any }) {
  return (
    <Accordion allowMultiple>
      {list.map((item: any, index: number) => (
        <AccordionItem mt={3} key={index}>
          <h2>
            <AccordionButton border='none' px={0}>
              <Box flex='1' textAlign='left'>
                {item?.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box sx={{ display: 'grid', gap: 2 }}>
              {item?.children?.map((child: any, indexChild: number) => (
                <Link
                  href={child.link}
                  key={indexChild}
                  fontWeight={'semibold'}
                  _hover={{ color: 'primary.500' }}
                >
                  {child.name}
                </Link>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;
