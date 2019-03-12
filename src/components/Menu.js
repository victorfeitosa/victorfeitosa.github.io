import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className='menu-container'>
      <MenuItem to='/about'>About Me</MenuItem>
      <MenuItem to='/portfolio'>Portfolio</MenuItem>
      <MenuItem to='/cv'>CV</MenuItem>
    </div>
  )
}

export default Menu
