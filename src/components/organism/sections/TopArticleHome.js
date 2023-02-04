import React from 'react'
import './TopArticleHome.css'
import topSectionImg from "../../../assets/svgs/splash_screen_graphic.58091192.svg"
import bottomSectionImg from '../../../assets/svgs/building_block.svg'
import MiddleArticleHome from'./MiddleArticleHome'
import { NavLink } from 'react-router-dom'
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
      const {id,sectionLoc,title,description,info,showMiddleSection,href,linkText} = curElem;
      return  (
        
        <div key = {i}>
        <div className="first" key={id}  >
          <div className="text" >
            <h3 className="display-1"  >{title}</h3>
            <p className="text-center text-left text-margin text-muted" key={4} >{description}</p>

            <p className= {id===1? "text-left text-margin text-body ":"text-left text-margin text-body text-muted"}  key={5}>{info}
            <NavLink to={href} className= {id ===1?'no-display':'cl-blue'}>{linkText}</NavLink>
            </p>




          </div>
          <div className="col-3-img" key={6} >   
                <img src={iconObj[sectionLoc]} alt="..." key={7}/>
            </div>
          
        </div>
        <MiddleArticleHome isDisplayed = {showMiddleSection} key = {8} />
        </div>
        
      )

    })
        }
        
    </>
  )
}

export default TopArticleHome