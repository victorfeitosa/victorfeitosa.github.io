import React from 'react'
import SocialLink from './SocialLink'
import { FaGithub, FaLinkedin, FaGitlab, FaTwitter } from 'react-icons/fa'

import '../styles/SocialBar.scss'

const SocialBar = () => {
  return (
    <div className='social-bar'>
      <SocialLink to='https://github.com/victorfeitosa' icon={<FaGithub />} />
      <SocialLink to='https://github.com/victorfeitosa' icon={<FaGitlab />} />
      <SocialLink to='https://www.linkedin.com/in/victorfeitosa/' icon={<FaLinkedin />} />
      <SocialLink to='https://twitter.com/victorklng' icon={<FaTwitter />} />
    </div>
  )
}

export default SocialBar
