// import React, { useState } from 'react'
import './Tutorials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Tutorials = () => {
  const data = [
    {
      name: `How to install Akash DTH setup box?`,
      img: `../Assets/Images/T1.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
    },
    {
      name: `Voice Commands`,
      img: `../Assets/Images/T2.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
    },
    {
      name: `Pause, Rewind & Play`,
      img: `../Assets/Images/T3.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
    },
    {
      name: `How to install Akash DTH setup box?`,
      img: `../Assets/Images/T1.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
    },
    {
      name: `Pause, Rewind & Play`,
      img: `../Assets/Images/T2.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
    },
    
  ];
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="akash-headers">
          <h1>See Akash How Akash DTH TV Setup Box Works</h1>
          <div className="view-tutorials">
            <p>View All</p>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
        <div className='w-3/4 m-auto Tutorial-cards'>
        <div className="mt-20">
        <Slider {...settings}>
          {data.map((items) => (
            <div key={items.name} className="t-card">
              <div className='card-img'>
                <img src={items.img} alt=""/>
              </div>
              <div className='card-data'>
                <h3 className="text-xl">{items.name}</h3>
                <p className="">{items.review}</p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
      </div>

    );
  }

export default Tutorials