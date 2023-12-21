import React from 'react'
import './footer.css'
// import './MediaQuery.css'
const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='row footer'>
                <div className='col-md-6 foot'>
                    <div className='left logo navbar-brand px-3'>
                        <img src='https://cdnhost.akashbd.net/assets/images/akash-logo-blue.svg?v=7.0.5' alt='logo' />
                    </div>
                    <p className='mt-3 px-4 ms-2'>AKASH is the first ever Direct To Home (DTH) service launched in Bangladesh by BEXIMCO Communications
                        Limited, with an aim to win the hearts of millions with its commitment to quality services that will
                        revolutionize the entertainment industry in the country. Through DTH, as the name says, signals are
                        directly received from the satellite by the dish installed at your premise. You will also need a set top box
                        (STB) connected with your TV and a dish. Enhancing TV viewing experience for people is our top most priority
                        and through continuous technological innovation, backed by our solid customer support, AKASH will redefine TV
                        viewing experience like never before.</p>
                </div>
               
                    <div className='col-md-3 foot'>
                        <h3>Quick Links</h3>
                        <hr className='hr' />
                        <p>Liability Disclaimer</p>
                        <p>Privacy & Cookies</p>
                        <p>Channel List</p>
                        <p>Subscription Agreement</p>
                    </div>
                    <div className='col-md-3 foot'>
                        <h3>Contact Us</h3>
                        <hr className='hr' />
                        <p>16442, 09609999000</p>
                        <p> support@akashdth.com</p>
                        <h3>Fallow</h3>
                        <div className='fallow'>
                            <div className='icons'>
                                <i className='bx bxl-facebook'></i>
                            </div>

                            <div className='icons'>
                                <i className='bx bxl-twitter'></i>
                            </div>

                            <div className='icons'>
                                <i className='bx bxl-instagram'></i>
                            </div>
                        </div>
                    </div>
               
                <hr className='mt-3' />
                <p className='end'>2023 © All rights reserved. <a href='#'>Beximco Communications Limited.</a></p>
            </div>
        </div>
    )
}

export default Footer
