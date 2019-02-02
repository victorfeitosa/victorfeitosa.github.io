import React from 'react'

const Tags = (props) => {
  return (
    <div className={'tags-container' + (props.isSmall ? ' tags-container--short' : '')}>
      {
        props.tags.map((tag, i) => (
          <div key={i} className='tag'>
          {tag}
          </div>
        ))
      }
    </div>
  )
}

export default Tags
