import Template from '@/components/template'
import React from 'react'
import LocationSection from './_component/location-section'
import { Divider } from '@chakra-ui/react'
import FormSection from './_component/form-section'

function Contact() {
  return (
    <Template>
      <LocationSection/>
      <Divider w={"80%"} mx={"auto"}/>
      <FormSection/>
    </Template>
  )
}

export default Contact
