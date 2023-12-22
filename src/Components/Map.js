import React from 'react'
import './Tabs.css'
const Map = () => {
  return (
    <div className='container'>
      <div className='profile-section'>
        <div className='message-bar'>
           <div className='bar-items'>
           <input type='text' placeholder='Enter Your Pincode...'/>
           </div>
           <div className='bar-items'>
         <button>
         <span className='bx bxl-telegram'></span>
         </button>
           </div>
         
        </div>
      </div>
    </div>
  )
}

export default Map