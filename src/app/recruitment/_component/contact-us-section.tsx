import { COLOR_PRIMARY, COLOR_SNOW_LIGHTEST, COLOR_TEXT } from '@/constants/ui'
import { Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function ContactUsSection() {
  return (
    <Box as='section' className='tw-relative tw-px-[1rem] sm:tw-px-[7rem] tw-py-[3rem] sm:tw-py-[6rem]'>
      <VStack bgColor={COLOR_SNOW_LIGHTEST} py={"2rem"} px={{base:"1.25rem", sm:"14rem"}} rounded={"md"}>
        <Text fontSize={"1.25rem"} textAlign={"center"} fontWeight={"semibold"}>Tertarik kuliah sambil kerja ?</Text>
        <Text fontSize={{sm:"1.125rem"}} color={COLOR_TEXT} textAlign={"center"}>Hubungi tim kami untuk mulai berdiskusi mengenai kesempatan ini.</Text>
        <Button colorScheme='primary' mt={{base:"1.5rem", sm:"2rem"}} style={{background:COLOR_PRIMARY}}>Hubungi kami</Button>
      </VStack>
    </Box>
  )
}

export default ContactUsSection
