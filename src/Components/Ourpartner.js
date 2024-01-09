import React from 'react'
import './Tutorials.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Ourpartner = () => {
  const slickSettings = {
    prevArrow: <div className="prev"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></div>,
    nextArrow: <div className="next"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></div>,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container'>
      <div className="slider-wrapper">
      <div className='our-partner'>
      <span></span>
        <h4>Our Partner</h4>
        <span></span>
      </div>
        <Slider {...slickSettings} className="slider responsive">
          <div className="fact">
            <div className='bank-card'>
              <img src='https://cdnhost.akashbd.net/assets/uploads/our_partner/1688534816-47998707.png?v=7.0.5' alt='' />
            </div>
          </div>

          <div className="fact">
            <div className='bank-card'>
              <img src='https://cdnhost.akashbd.net/assets/uploads/our_partner/1688534767-9399678.png?v=7.0.5' alt='' />
            </div>
          </div>

          <div className="fact">
            <div className='bank-card'>
              <img src='https://cdnhost.akashbd.net/assets/uploads/our_partner/1688534858-2456045.png?v=7.0.5' alt='' />
            </div>
          </div>

          <div className="fact">
            <div className='bank-card'>
              <img src='https://cdnhost.akashbd.net/assets/uploads/our_partner/1688535093-7418368.png?v=7.0.5' alt='' />
            </div>
          </div>
          <div className="fact">
            <div className='bank-card'>
              <img src='https://cdnhost.akashbd.net/assets/uploads/our_partner/1688535481-91966961.png?v=7.0.5' alt='' />
            </div>
          </div>
          <div className="fact">
            <div className='bank-card'>
              <img src='	https://cdnhost.akashbd.net/assets/uploads/our_partner/1688535654-89577566.png?v=7.0.5' alt='' />
            </div>
          </div>
          <div className="fact">
            <div className='bank-card'>
              <img src='	https://cdnhost.akashbd.net/assets/uploads/our_partner/1688535992-92760192.png?v=7.0.5' alt='' />
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
        <span className='partner-line'></span>
      </div>
    </div>
  )
}

export default Ourpartner