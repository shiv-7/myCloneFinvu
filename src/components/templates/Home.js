import React, { useState } from 'react'
import TopArticleHome from '../organism/sections/TopArticleHome'
// import MiddleArticleHome from '../organism/sections/MiddleArticleHome'
import BannerHome from '../organism/sections/BannerHome'
import AdoptorsHome from '../organism/sections/AdoptorsHome'
import topBottomBodyData from '../atom/Contents.js'

const Home = () => {
    const [sectionData] = useState(topBottomBodyData)
    // console.log(sectionData)
  return (
    <>
    <TopArticleHome sectionData= {sectionData} />
    
    {/* <Body1 sectionData= {sectionData} /> */}
    <BannerHome/>
    <AdoptorsHome/>
    </>
  )
}

export default Home