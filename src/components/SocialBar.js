import React from 'react'
import SocialLink from './SocialLink'
import { FaGithub, FaLinkedin, FaGitlab, FaTwitter } from 'react-icons/fa'

import '../styles/SocialBar.scss'

const SocialBar = (props) => {
  return (
    <div className={'social-bar' + (props.isSmall ? ' social-bar--small' : '')}>
      <SocialLink to='https://github.com/victorfeitosa' icon={<FaGithub />} isSmall={props.isSmall} />
      {/* <SocialLink to='https://gitlab.com/victorfeitosa' icon={<FaGitlab />} isSmall={props.isSmall} /> */}
      <SocialLink to='https://www.linkedin.com/in/victorfeitosa/' icon={<FaLinkedin />} isSmall={props.isSmall} />
      <SocialLink to='https://twitter.com/victorklng' icon={<FaTwitter />} isSmall={props.isSmall} />
    </div>
  )
}

export default SocialBar
