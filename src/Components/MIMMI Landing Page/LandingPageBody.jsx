import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from './Home'
import Services from './Services'
import BrandsHelped from './BrandsHelped'
import CustomCarouselSection from './CustomCarouselSection'
import BrandStory from './BrandStory'
import Teams from './Teams'
import Result from './Result'

function LandingPageBody() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="w-[100%] h-20 bg-green-300" id='Home_Section'>&nbsp;</div>
      <div className="w-[100%] pt-5 lg:pt-5 bg-green-600">&nbsp;</div>
      <HeroSection />
      <div className="w-[100%] pt-5 lg:pt-5 bg-green-600">&nbsp;</div>
      <Services />
      <div className="w-[100%] pt-5 lg:pt-5 bg-green-600">&nbsp;</div>
      <BrandsHelped />
      <CustomCarouselSection />
      <div className="w-[100%] pt-5 lg:pt-5 bg-green-600">&nbsp;</div>
      <BrandStory />
      <div className="w-[100%] pt-5 lg:pt-5 bg-green-600">&nbsp;</div>
      <Teams />
      <div className="w-[100%] pt-5 lg:pt-5 bg-green-600">&nbsp;</div>
      <Result />
    </>
  )
}

export default LandingPageBody