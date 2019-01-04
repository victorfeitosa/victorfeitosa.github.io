import React from 'react'
import SocialBar from './SocialBar'
import Tags from './Tags'

import '../styles/SubTitle.scss'

export default function SubTitle(props) {
  return (
    <>
      <div className={'title-container' + (props.isSmall ? ' title-container--small' : '')}>
        <h2 className={'title title--main' + (props.isSmall ? ' title--main--small' : '')}>
          <span className='hideable'>Hello! My name is </span>
          Victor Feitosa
        </h2>
        <h3 className={'title title--sub' + (props.isSmall ? ' title--sub--hidden' : '')}>I'm a Full Time</h3>
      </div>
      <Tags
        isSmall={props.isSmall}
        tags={[
          'Front End Developer',
          'Gamer',
          'Artist',
          'Technology Enthusiast',
        ]}
      />
      <SocialBar isSmall={props.isSmall} />
    </>
  )
}
