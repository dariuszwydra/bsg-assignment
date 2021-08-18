import React from 'react'
import ReactPlayer from 'react-player'
import './MediaPlayer.css'

export default function MediaPlayer(props) {
  return (
    <div className={'playerWrapper ' + props.visible}>
      <ReactPlayer
          url='https://cd-stream-od.telenorcdn.net/tnfbaod/SF/585db4b3e4b09db0cf348a64/dash_a1.ism/playlist.mpd'
          controls
          className={'reactPlayer '}
          width='100%'
          height='100%'
        />
    </div>
  )
}
