import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import MediaList from './MediaList/MediaList.js';
import MediaPlayer from './MediaPlayer/MediaPlayer.js';

// function to log in as Anonymous user
const signIn = () => {
  axios.post('https://thebetter.bsgroup.eu/Authorization/SignIn', {
    // no data here.
  })
  .then(function (response) {
    localStorage.setItem('token', response.data.AuthorizationToken.Token)
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });
}

function App() {

  useEffect(() => {
    signIn();
  });

  return (
    <div>
      <MediaList/>
    </div>
  );
}

export default App;
