import React, { useState } from 'react'
import IntroArticleHome from '../organism/sections/IntroArticleHome'
import BannerHome from '../organism/sections/BannerHome'
import AdoptorsHome from '../organism/sections/AdoptorsHome'
import consentServicesBodyData from '../atom/ConsentServicesContents.js'

const Home = () => {
    const [sectionData] = useState(consentServicesBodyData)
  return (
    <>
    <IntroArticleHome sectionData= {sectionData} />
    <BannerHome/>
    <AdoptorsHome/>
    </>
  )
}

export default Home