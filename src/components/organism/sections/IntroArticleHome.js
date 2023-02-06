import React from 'react'
import './IntroArticleHome.css'
import introSectionImg from "../../../assets/svgs/splash_screen_graphic.58091192.svg"
import servicesSectionImg from '../../../assets/svgs/building_block.svg'
import ConsentArticleHome from'./ConsentArticleHome'
import { NavLink } from 'react-router-dom'

const IntroArticleHome = ({sectionData}) => {
  const imgLocObj = {
    "top":introSectionImg,
    "bottom":servicesSectionImg
  }
  return (
    <>
    {sectionData.map((curElem,i)=>{
      const {id,sectionLoc,title,description,info,showConsentSection,href,linkText} = curElem;
      return  (
        
        <div key = {i}>
        <div className="display-main"  >
          <div className="text" >
            <h3 className="display-1"  >{title}</h3>
            <p className="text-center text-left text-margin text-muted"  >{description}</p>

            <p className= {id===1? "text-left text-margin text-body ":"text-left text-margin text-body text-muted"}  >{info}
            <NavLink to={href} className= {id ===1?'no-display':'cl-blue'}>{linkText}</NavLink>
            </p>




          </div>
          <div className="col-3-img"  >   
                <img src={imgLocObj[sectionLoc]} alt="..." />
            </div>
          
        </div>
        <ConsentArticleHome isDisplayed = {showConsentSection} />
        </div>
        
      )

    })
        }
        
    </>
  )
}

export default IntroArticleHome