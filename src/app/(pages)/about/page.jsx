import Aboutaward from '@/components/about-award'
import Breadcrumb from '@/components/breadcrumb'
import Services from '@/components/Services'
import Slider from '@/components/slider'
import React from 'react'

const page = () => {
  return (
    <div>
    <Breadcrumb title='About us'  label="Home" href= "/" />
    <Slider />
    <Aboutaward />
   
    </div>
  )
}

export default page