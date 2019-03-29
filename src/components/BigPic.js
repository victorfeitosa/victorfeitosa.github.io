import React from 'react'

const BigPic = (props) => {
  return (
    <div className='big-pic-container'>
      <div className={'big-pic' + (props.isSmall ? ' big-pic--small' : '')}></div>
    </div>
  )
}

export default BigPic
