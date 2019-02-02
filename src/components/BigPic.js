import React from 'react'

const BigPic = (props) => {
  return (
    <div className={'big-pic' + (props.isSmall ? ' big-pic--small' : '')}></div>
  )
}

export default BigPic
