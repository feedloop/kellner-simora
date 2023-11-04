import { ChefImage } from '@/assets/images'
import { COLOR_TEXT } from '@/constants/ui'
import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function IntroSection() {
  return (
    <section className='tw-w-full tw-px-[1rem] sm:tw-px-[7rem] tw-pt-[6rem]'>
       <VStack className='tw-text-center'>
        <Text color={'primary.500'} fontWeight={'semibold'}>
          Rekrutmen
        </Text>
        <Heading
          as={'h2'}
          fontWeight={'semibold'}
          fontSize={'2.25rem'}
          lineHeight={'2.75rem'}
          letterSpacing={'-2%'}
        >
          Kuliah sambil Kerja
        </Heading>
        <Text color={COLOR_TEXT} fontSize={'1.25rem'} maxW={{sm:'60%'}} mx={'auto'}>
          We have offices and teams all around the world.
        </Text>
      </VStack>
      <HStack display={{base:'none',sm:'flex'}} gap={'4rem'} py={'6rem'}>
        <Image src={ChefImage} alt='chef-smiling' />
        <Box display={"flex"} flexDir={"column"} gap={".5rem"} maxW={'50%'}>
          <Text lineHeight={"1.75rem"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            libero reprehenderit perspiciatis maiores mollitia molestiae ad
            autem ipsam nisi facilis? Rem eligendi, sunt exercitationem ipsa
            vitae veritatis voluptatibus ad enim?
          </Text>
          <Text lineHeight={"1.75rem"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            libero reprehenderit perspiciatis maiores mollitia molestiae ad
            autem ipsam nisi facilis? Rem eligendi, sunt exercitationem ipsa
            vitae veritatis voluptatibus ad enim?
          </Text>
          <Text lineHeight={"1.75rem"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            libero reprehenderit perspiciatis maiores mollitia molestiae ad
            autem ipsam nisi facilis? Rem eligendi, sunt exercitationem ipsa
            vitae veritatis voluptatibus ad enim?
          </Text>
        </Box>
      </HStack>
    </section>
  )
}

export default IntroSection
