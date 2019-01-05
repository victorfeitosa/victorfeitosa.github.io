import React from 'react'

import '../styles/SocialLink.scss'

const SocialLink = (props) => {
  return (
    <a
      className={'social-link' + (props.isSmall ? ' social-link--small' : '')}
      href={props.to}
      target="_blank"
      rel="noopener noreferrer">{props.icon}
    </a>
  )
}

export default SocialLink
