import React from 'react'
import './TopArticleHome.css'
import topSectionImg from "../../../assets/svgs/splash_screen_graphic.58091192.svg"
import bottomSectionImg from '../../../assets/svgs/building_block.svg'
import MiddleArticleHome from'./MiddleArticleHome'
// import  from './Body2'

const TopArticleHome = ({sectionData}) => {
  const iconObj = {
    "top":topSectionImg,
    "bottom":bottomSectionImg
  }
  // console.log(sectionData)
  return (
    <>
    {sectionData.map((curElem,i)=>{
      const {id,sectionLoc,title,description,info,showMiddleSection} = curElem;
      return  (
        <>

        <div className="first" id={id} key = {1 }>
          <div className="text" key={2}>
            <h3 className="display-1" key={3} >{title}</h3>
            <p className="text-center text-left text-margin" key={4} >{description}</p>
            <p className="text-left text-margin text-body " key={5}>{info}
            </p>
          </div>
          <div className="col-3-img" key={6} >   
                <img src={iconObj[sectionLoc]} alt="..." key={7}/>
            </div>
          
        </div>
        <MiddleArticleHome isDisplayed = {showMiddleSection} key = {8} />
        </>
      )

    })
        }
        
    </>
  )
}

export default TopArticleHome