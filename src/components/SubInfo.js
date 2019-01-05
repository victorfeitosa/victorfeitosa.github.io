import React from 'react'
import SocialBar from './SocialBar'
import Tags from './Tags'

import '../styles/SubInfo.scss'

export default function SubInfo(props) {
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
