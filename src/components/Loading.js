import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = ({hasIcon=true, children}) => {
  return (
    <div className='loading'>
      {children} {hasIcon && <FaSpinner className='loading__spinner' />}
    </div>
  )
}

export default Loading
