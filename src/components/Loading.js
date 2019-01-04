import React from 'react'
import { FaSpinner } from 'react-icons/fa'

import '../styles/Loading.scss'

const Loading = (props) => {
  const hasIcon = props.hasIcon === undefined ? true : props.hasIcon
  return (
    <div className='loading'>
      {props.children} {hasIcon && <FaSpinner className='loading__spinner' />}
    </div>
  )
}

export default Loading
