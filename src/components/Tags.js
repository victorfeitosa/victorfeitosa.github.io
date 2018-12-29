import React from 'react'
import '../styles/Tags.scss'

const Tags = (props) => {
  return (
    <div className='tags-container'>
      {
        props.tags.map((tag, i) => (
          <div className='tag'>
          {tag}
          {!props.isSmall && i !== props.tags.length-1 && <span className='tag__separator'>/</span>}</div>
        ))
      }
    </div>
  )
}

export default Tags
