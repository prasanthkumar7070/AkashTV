import React from 'react'
import Carousel from '../Carousel'
import "./Home.css"
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Tabs from './Tabs'
import Tutorials from './Tutorials';
import Download from './Download';

const Home = () => {
  return (
    <div>
      <Carousel />

      <div className='container'>
        <div className='why-text'>
          <h1>Why AKASH</h1>
          <p>More than just a connection, AKASH is here to redefine your TV viewing
            experience forever. Don’t believe us? Dive into the exciting world of AKASH and see for yourself!</p>
        </div>
        <div className='row'>
          <div className='col-md-2 col-sm-3 col-6 cards'>
            <div className="card-container">
              <div className="card">
                <div className="side">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/great-quality-viewing-1.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Great Quality</p>
                    <h1>Viewing</h1>
                  </div>
                </div>
                <div className="side back">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/great-quality-viewing-2.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Great Quality</p>
                    <h1>Viewing</h1>
                    <span>Enjoy an unparalleled viewing experience with real HD quality picture and sound.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-2 col-sm-3 col-6 cards'>
            <div className="card-container">
              <div className="card">
                <div className="side">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/akash-dth-1.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Exiting World Of</p>
                    <h1>Akash</h1>
                  </div>
                </div>
                <div className="side back">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/akash-dth-2.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Exiting World Of</p>
                    <h1>Akash</h1>
                    <span>Rejoice with a wide range of popular TV channels to keep you hooked!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-2 col-sm-3 col-6 cards'>
            <div className="card-container">
              <div className="card">
                <div className="side">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/support-1.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Professional Customer</p>
                    <h1>support</h1>
                  </div>
                </div>
                <div className="side back">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/support-2.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Professional Customer</p>
                    <h1>support</h1>
                    <span>Make the most of our professional installation and after-sales service with our helpline catering to you 24/7.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-2 col-sm-3 col-6 cards'>
            <div className="card-container">
              <div className="card">
                <div className="side">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/wide-range-features-1.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Wide Range Of</p>
                    <h1>features</h1>
                  </div>
                </div>
                <div className="side back">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/wide-range-features-2.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>Wide Range Of</p>
                    <h1>features</h1>
                    <span>Experience TV like never before with multiple recharge options, program guide, favourite channel listing, program reminder and parental control!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-2 col-sm-3 col-6 cards'>
            <div className="card-container">
              <div className="card">
                <div className="side">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/user-friendly-experience-1.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>User Friendly</p>
                    <h1>Experience</h1>
                  </div>
                </div>
                <div className="side back">
                  <div className='card-logo'>
                    <img src="https://cdnhost.akashbd.net/assets/images/icons/user-friendly-experience-2.svg?v=7.0.5" alt="Jimmy Eat World" />
                  </div>
                  <div className='card-text'>
                    <p>User Friendly</p>
                    <h1>Experience</h1>
                    <span>Our compact and light-weight HD Set Top Box and attractive user interface will surely keep you ahead of the game!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='img-wrapper'>
        <ReactCompareSlider className='slide'
          itemOne={<ReactCompareSliderImage src='../Assets/Images/low.png' 
          srcSet="../Assets/Images/low.png" alt="Image one" />}
          
          itemTwo={<ReactCompareSliderImage src="../Assets/Images/hd.png" 
          srcSet="../Assets/Images/hd.png" alt="Image two" />}
        />
         <div className='true-akash'>
             <h1>What is True HD in Akash?</h1>
             <div className='row'>
              <div className='col-md-6'>
                  <div className='hd-logo'>
                    <img src='https://cdnhost.akashbd.net/assets/images/icons/hq-image.svg?v=7.0.5' alt='logo'/>
                  </div>
                  <p>5x Sharper Picture Quality</p>
              </div>

              <div className='col-md-6'>
              <div className='hd-logo'>
                    <img src='https://cdnhost.akashbd.net/assets/images/icons/sound-box-icon.svg?v=7.0.5' alt='logo'/>
                  </div>
                  <p>Digital Quality Sound</p>
              </div>
             </div>
             <h4>Slide to experience the difference!</h4>
         </div>
      </div>
      {/* <Tabs/> */}
      <Tutorials/>
      <Download/>
    </div>
  )
}

export default Home