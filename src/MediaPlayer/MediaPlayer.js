import React from 'react'
import ReactPlayer from 'react-player'

export default function MediaPlayer() {
  return (
    <div>
      <ReactPlayer
          url='https://cd-stream-od.telenorcdn.net/tnfbaod/SF/585db4b3e4b09db0cf348a64/dash_a1.ism/playlist.mpd'
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
    </div>
  )
}
