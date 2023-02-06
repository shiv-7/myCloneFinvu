import React from 'react'
import './AdoptorsHome.css'
import axis_bank_logo from '../../../assets/images/axis_bank_logo.png'
import federal_bank_logo from '../../../assets/images/federal_bank_logo.png'
import hdfc_bank_logo from '../../../assets/images/hdfc_logo.png'
import kairoscapital_logo from '../../../assets/images/kairoscapital_logo.png'
import paisa_logo from '../../../assets/images/paisa.png'
const AdoptorsHome = () => {
  return (
    <>
        <div className="display-main">
            <div className="banner-text">
                <h2>Our Early adopters</h2>
                <h3 className="mb5">Banks and NBFCs</h3>
                <p className='text-bottom'>
                    <img src={axis_bank_logo} alt="..." className='logo-banks  mr-1'/>
                    <img src={federal_bank_logo} alt="..." className='logo-banks lg-width-1 mr-1 ml-1 md-0'/>
                    <img src={hdfc_bank_logo} alt="..." className='logo-banks lg-width-2 mr-1 ml-1 md-0'/>
                </p>
                
                <h3 className="mb5">SEBI Regulated RIAs</h3>
                <p>
                <img src={kairoscapital_logo} alt="..." className='logo-banks lg-width-1 mr-1'/>
                <img src={paisa_logo} alt="..." className='logo-banks lg-width-2 mr-1'/>
                </p>
            </div>
        </div>
    </>
  )
}

export default AdoptorsHome