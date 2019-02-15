import React from 'react'
import PropTypes from 'prop-types'

const SocialLink = (props) => {
  return (
    <a
      title={props.title}
      className='social-link'
      href={props.to}
      target="_blank"
      rel="noopener noreferrer"
    >
        {props.icon}{props.children}
    </a>
  )
}

SocialLink.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
}

export default SocialLink
