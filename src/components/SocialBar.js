import React from 'react'
import SocialLink from './SocialLink'
import { FaGithub, FaLinkedin, FaBehanceSquare, FaTwitter } from 'react-icons/fa'

const SocialBar = (props) => {
  return (
    <div className={'social-bar' + (props.isSmall ? ' social-bar--small' : '')}>
      <SocialLink title='GitHub' to='https://github.com/victorfeitosa' icon={<FaGithub />} isSmall={props.isSmall} />
      <SocialLink title='Behance' to='https://www.behance.net/victorrmfe06df' icon={<FaBehanceSquare />} isSmall={props.isSmall} />
      <SocialLink title='Linkedin' to='https://www.linkedin.com/in/victorfeitosa/' icon={<FaLinkedin />} isSmall={props.isSmall} />
      <SocialLink title='Twitter' to='https://twitter.com/victorklng' icon={<FaTwitter />} isSmall={props.isSmall} />
    </div>
  )
}

export default SocialBar
