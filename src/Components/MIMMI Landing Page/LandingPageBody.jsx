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
      <div className="w-[100%] h-20 bg-gradient-to-b from-white to-orange-100" id='Home_Section'>&nbsp;</div>
      <div className="w-[100%] pt-5 lg:pt-5 bg-orange-100">&nbsp;</div>
      <HeroSection />
      <div className="w-[100%] pt-5 lg:pt-5 bg-gradient-to-b from-orange-100 to-orange-200">&nbsp;</div>
      <Services />
      <div className="w-[100%] pt-5 lg:pt-5 bg-gradient-to-b from-orange-200 to-orange-100">&nbsp;</div>
      <BrandsHelped />
      <CustomCarouselSection />
      <div className="w-[100%] pt-5 lg:pt-5 bg-gradient-to-b from-orange-100 to-orange-200">&nbsp;</div>
      <BrandStory />
      <div className="w-[100%] pt-5 lg:pt-5 bg-gradient-to-b from-orange-200 to-orange-100">&nbsp;</div>
      <Teams />
      <div className="w-[100%] pt-5 lg:pt-5 bg-gradient-to-b from-orange-100 to-orange-200">&nbsp;</div>
      <Result />
    </>
  )
}

export default LandingPageBody