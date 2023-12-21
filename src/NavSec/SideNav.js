import React from 'react'
import "./SideNav.css"
const SideNav = () => {
  return (
    <div className='sideNav'>

      <div className='sideNav-items'>
        <div className='menu-links'>
          <i className='bx bx-menu-alt-left'></i>
          <h5>Menu</h5>
        </div>
        <div className='menu-links'>
          <i className='bx bxs-home'></i>
          <h5>Home</h5>
        </div>
        <div className='menu-links'>
          <i className='bx bx-search'></i>
          <h5>Search</h5>
        </div>
        <div className='menu-links'>
          <i className='bx bxs-notepad'></i>
          <h5>Program guide</h5>
        </div>
        <div className='menu-links'>
          <i className='bx bx-play-circle'></i>
          <h5>Subscribe</h5>
        </div>
        <div className='menu-links'>
          <i className='bx bxs-cog'></i>
          <h5>Settings</h5>
        </div>
      </div>
      <div className='fofo'></div>
    </div>
  )
}

export default SideNav