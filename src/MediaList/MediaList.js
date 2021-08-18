import React, { useState, useEffect } from 'react'
import MediaListItem from './MediaListItem/MediaListItem.js'
import axios from 'axios'
import MediaPlayer from '../MediaPlayer/MediaPlayer.js';

// function to get the movies list from API
export default function MediaList() {

  const [mediaList, setMediaList] = useState([]);
  const [playerVisible, setPlayerVisible] = useState('hidden');
  const [mediaId, setMediaId] = useState(0);
  const [currentMedia, setCurrentMedia] = useState({});

  const setMediaIdAndPlay = (Id) => {
    setMediaId(Id);

    setPlayerVisible('visible');
    console.log(JSON.stringify(getMediaByMediaId(mediaId)));
  }

  const getMediaList = () => {
    axios({
      method: 'post', 
      url: 'https://thebetter.bsgroup.eu/Media/GetMediaList',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data: {
        "MediaListId": 2,
        "includeCategories": false,
        "includeImages": true,
        "includeMedia": false,
        "PageNumber": 1,
        "PageSize": 15
      }
    })
    .then(function (response) {
      console.log(response.data.Entities);
      setMediaList(response.data.Entities);
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
  }

  const getMediaByMediaId = (Id) => {
    axios({
      method: 'post', 
      url: 'https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data: {
        "MediaId": parseInt(Id),
        "StreamType": "TRIAL"
      }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
  }

  useEffect(() => {
    getMediaList();
  }, []);

  return (
    <div className='container'>
      <div onClick={() => setPlayerVisible('hidden')}>
        <MediaPlayer visible={playerVisible} />
      </div>
      {mediaList.map((item, i) => (
        <div onClick={() => {setMediaIdAndPlay(item.Id.toString()); console.log();}}>
          <MediaListItem title={item.Title} description={item.Description} images={item.Images} key={i} />
        </div>
      ))}
      <button onClick={() => console.log(playerVisible)}>EEE</button>
    </div>
  )
}
