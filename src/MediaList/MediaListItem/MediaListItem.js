import React from 'react'
import './MediaListItem.css'

export default function MediaListItem(props) {
  return (
    <div className='mediaListItem'>
      <div className='flexContainer image'>
        <img src={props.images[0].Url} />
      </div>
      <div className='flexContainer'>
        <span>{props.title}</span>
        <span>{props.description}</span>
      </div>
    </div>
  )
}
