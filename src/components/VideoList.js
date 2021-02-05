import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect})=>{
    const videoList = videos.map(video=>(
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}  />
    ));
    return(
        <Grid container spacing={10}>
            {videoList}
        </Grid> 
        
    );
}

export default VideoList;