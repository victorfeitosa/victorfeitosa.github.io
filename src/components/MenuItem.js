import React from 'react'
import { Link } from 'gatsby'

import '../styles/MenuItem.scss'

function MenuItem({ to, children }) {
  return (
    <div  className='menu-item'>
      <Link to={to}>{ children }</Link>
    </div>
  )
}

export default MenuItem
