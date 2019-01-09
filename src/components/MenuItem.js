import React from 'react'
import { Link } from 'gatsby'

import '../styles/MenuItem.scss'

const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? { className: 'menu-item menu-item--active' }
    : { className: 'menu-item' }
}

function MenuItem({ to, children }) {
  return (
    <Link getProps={isPartiallyActive} className='menu-item' to={to}>{ children }</Link>
  )
}

export default MenuItem
