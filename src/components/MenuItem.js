import React from 'react'
import { Link } from 'gatsby'

const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? { className: 'menu-item menu-item--active' }
    : { className: 'menu-item' }
}

function MenuItem({ to, children }) {
  return (
    <Link rel='prefetch' getProps={isPartiallyActive} className='menu-item' to={to}>{ children }</Link>
  )
}

export default MenuItem
