import React from 'react'

import '../styles/BigPic.scss'

const BigPic = (props) => {
  return (
    <div className={'big-pic' + (props.isSmall ? ' big-pic--small' : '')}></div>
  )
}

export default BigPic
