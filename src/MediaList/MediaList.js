import React, { useState, useEffect } from 'react'
import MediaListItem from './MediaListItem/MediaListItem.js'
import axios from 'axios'

// function to get the movies list from API


export default function MediaList() {

  const [mediaList, setMediaList] = useState([]);

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

  useEffect(() => {
    getMediaList();
  }, []);

  return (
    <div>
      <h2>LISTA</h2>
      {mediaList.map((item, i) => (
        <MediaListItem title={item.Title} description={item.Description} images={item.Images} key={i}/>
      ))}
    </div>
  )
}
