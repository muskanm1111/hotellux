import Aboutaward from '@/components/about-award'
import Abouttestimonials from '@/components/about-testimonials'
import Breadcrumb from '@/components/breadcrumb'
import Slider from '@/components/slider'
import Story from '@/components/story'
import React from 'react'

const page = () => {
  return (
    <div>
    <Breadcrumb title='About us'  label="Home" href= "/" />
    <Story />
    <Slider />
    <Abouttestimonials />
    <Aboutaward />
   
    </div>
  )
}

export default page