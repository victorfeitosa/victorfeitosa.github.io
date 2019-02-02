import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className='menu-container'>
      <MenuItem ariaCurrent='page' to='/cv'>CV</MenuItem>
      <MenuItem to='/about'>About Me</MenuItem>
      <MenuItem to='/portfolio'>Portfolio</MenuItem>
    </div>
  )
}

export default Menu
