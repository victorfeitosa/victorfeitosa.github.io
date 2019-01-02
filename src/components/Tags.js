import React from 'react'
import '../styles/Tags.scss'

const Tags = (props) => {
  return (
    <div className='tags-container'>
      {
        props.tags.map((tag, i) => (
          <div className='tag'>
          {tag}
          </div>
        ))
      }
    </div>
  )
}

export default Tags
