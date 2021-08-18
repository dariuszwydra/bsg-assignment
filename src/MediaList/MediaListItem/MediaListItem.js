import React from 'react'
import './MediaListItem.css'

export default function MediaListItem(props) {
  return (
    <div className='mediaListItem'>
      <div className='flexContainer image'>
        <img src={props.images[0].Url} />
      </div>
      <div className='flexContainer'>
        <span className='title'>{props.title}</span>
        <span className='description'>{props.description}</span>
      </div>
    </div>
  )
}
