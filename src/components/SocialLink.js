import React from 'react'
import PropTypes from 'prop-types'

import '../styles/SocialLink.scss'

const SocialLink = (props) => {
  return (
    <a
      title={props.title}
      className='social-link'
      href={props.to}
      target="_blank"
      rel="noopener noreferrer"
    >
        {props.icon}
    </a>
  )
}

SocialLink.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
}

export default SocialLink
