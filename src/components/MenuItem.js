import React from 'react'
import { Link } from 'gatsby'

import '../styles/MenuItem.scss'

function MenuItem({ to, children }) {
  return (
    <Link activeClassName='menu-item--active' className='menu-item' to={to}>{ children }</Link>
  )
}

export default MenuItem
