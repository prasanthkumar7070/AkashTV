import React from 'react'
import './Tutorials.css'
const Download = () => {
    return (
        <div className='container download-section'>
            <div className='row'>
                <div className='col-md-6 col-sm-6 col-12'>
                    <div className='downlaod-banner'>
                        <img src='../Assets/Images/Banner.png' alt='' />
                    </div>
                </div>

                <div className='col-md-6 col-sm-6 col-12'>
                    <div className='download-app'>
                        <h3>Download<br/> MyAkash Digital TV App</h3>
                        <div className='row recharge-account'>
                            <div className='col-md-4 col-sm-4 col-12'>
                                <i class='bx bxs-zap'></i>
                                <p>Recharge your account</p>
                            </div>

                            <div className='col-md-4 col-sm-4 col-12'>
                                <i class='bx bx-tv'></i>
                                <p>Upgrade and change packs</p>
                            </div>

                            <div className='col-md-4 col-sm-4 col-12'>
                                <i class='bx bx-support'></i>
                                <p>Call center support</p>
                            </div>

                            <div className='goto-store'>
                                <div className='app-sec'>
                                  <img src='./Assets/Images/Google-Pay.png' alt=''/>
                                </div>

                                <div className='app-sec'>
                                  <img src='./Assets/Images/IOS.png' alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download