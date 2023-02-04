import React from 'react'
import './MiddleArticleHome.css'
import splash from '../../../assets/svgs/splash.svg'
import google_play_badge from'../../../assets/images/google_play_badge.png'
const MiddleArticleHome = ({isDisplayed}) => {
  return (
    <>

        <div className={isDisplayed?"first1 ":"no-display first1 "}>
            <div className="col-1-img">
                <img src={splash} alt="..." />
            </div>
            <div className="text2">
            <h3 className="display-1">Consent Based data sharing using our Trusted Platform.</h3>
            <p className="text-center text-left text-margin">
            Finvu AA provides the platform to facilitate sharing of information between your financial institution and the financial information users who are provinding you financial services.
            </p>
            <div className="points">
              <div className="pt-5-1">
              <span> <i className="bi bi-check-circle-fill"></i> </span>
              <p className="text-left-bullet"> Real time sharing of information with your Consent.</p></div>
              <div className="pt-5-1">
              <span> <i className="bi bi-check-circle-fill"></i> </span>
              <p className="text-left-bullet"> Information is shared securely as data is encrypted at rest and in transit..</p></div>
              <div className="pt-5-1">
              <span> <i className="bi bi-check-circle-fill"></i> </span>
              <p className="text-left-bullet"> No credentials of your accounts held with financial institution are taken or stored by us.</p></div>
              <div className="pt-5-1">
              <span> <i className="bi bi-check-circle-fill"></i> </span>
              <p className="text-left-bullet"> Manage your consents on the Finvu app and more.</p></div>
              
              <div className="pt-5-1">
              <p className="text-left-bullet"> Download the Finvu App from Playstore. iOS coming soon...</p></div>
              
              <div className="pt-5-1">  
                    <a href="https://play.google.com/store/apps/details?id=com.finvu" className="logo">
                    <img src={google_play_badge} alt="..." className='img-body'/>
                  </a>

              </div>


              
            </div>
            
            </div>
            
        </div>
        
    
    </>
  )
}

export default MiddleArticleHome