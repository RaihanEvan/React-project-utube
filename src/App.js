import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  handleSubmit=async (searchTerm)=>{ //stops exec of code untill nxt fetch
    const response = await youtube.get('search', {
      params:{
        part: 'snippet',
        maxResults:6, //fetch count
        key:'AIzaSyDSgeaGTOPIPeccPT3XLY_52ZqI2JNEhOs',//api key
        q: searchTerm,
    }}
    ); //from utube api
    console.log(response.data.items);

  }
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={6}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail/>
            </Grid>
            <Grid item xs={4}>
              <VideoList/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;