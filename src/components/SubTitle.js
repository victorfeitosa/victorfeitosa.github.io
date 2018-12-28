import React from 'react'

import '../styles/SubTitle.scss'

export default function SubTitle(props) {
  return (
    <div className='title-container'>
      <h2 className={'title title--main' + (props.isSmall ? ' title--main--small' : '')}>
        <span className='hideable'>Hello! My name is </span>
        Victor Feitosa
      </h2>
      <h3 className={'title title--sub' + (props.isSmall ? ' title--sub--hidden' : '')}>I'm a Full Time</h3>
    </div>
  )
}
