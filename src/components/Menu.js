import React from 'react'
import MenuItem from './MenuItem'

import '../styles/Menu.scss'

function Menu() {
  return (
    <div className='menu-container'>
      <MenuItem ariaCurrent='page' to='/cv'>CV</MenuItem>
      <MenuItem to='/about'>About Me</MenuItem>
      {/*<MenuItem to='/portfolio'>Portfolio</MenuItem>*/}
      <MenuItem to='/contact'>Contact</MenuItem>
    </div>
  )
}

export default Menu
