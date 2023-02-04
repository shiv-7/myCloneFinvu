import React from 'react'
import './BannerHome.css'
const BannerHome = () => {
  return (
    <>
        <div className="first bg-grey pd-5">
            <div className="banner-text">
                <h3 className='display-1'>Build products using our API</h3>
                <p className="text-center text-left text-margin text-bottom">
                We are providing an API driven infrastructure for financial data sharing which will be the core building block for digital economy.
                </p>
                <p className="text-center text-left text-margin text-bottom">
                Start building now. See the API documentation to know more or Reach Out to us.
                </p>
                <button className="bg-blue raise" type='button' >API Documentation</button>
            </div>
        </div>
    </>
  )
}

export default BannerHome