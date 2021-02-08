import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
//import VideoItem from './components/VideoItem';
import VideoDetail from './components/VideoDetail';
import logo from './assets/LogoMakr-0Hnuvj1.png';

// class App extends React.Component {
//   state = {
//     video: [],
//     selectedVideo: null,
//   }


const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <React.Fragment>
      <img src={logo} alt="utube logo" height={80} width={80} justify="left" />
      <Grid style={{justify:"center"}} container spacing={1} >
      <Grid item xs={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>
              <h4>Welcome to uTube</h4>
            </div>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8} sm={6} md={9} lg={9}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </React.Fragment>
  );

  async function handleSubmit(searchTerm) { //stops exec of code untill nxt fetch
    //const API_KEY = key.env.REACT_APP_API_KEY;
    const { data: { items: videos } } = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 6, //fetch count
        key: 'AIzaSyDSgeaGTOPIPeccPT3XLY_52ZqI2JNEhOs',//api key
        q: searchTerm,
      }
    }
    ); //from utube api
    //console.log(response.data.items);
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;