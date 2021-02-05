import React from 'react';
import {Paper,Typography} from '@material-ui/core';

const VideoDetail = ({video})=>{
    if(!video) return <div>Loading Result.....</div>;
    // else{
    //     return <div>Welcome to uTube</div>
    // }

    console.log(video)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <React.Fragment>
            <Paper elevation={5} style={{height:"80%"}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={5} style={{padding:'10px'}}>
                <Typography variant="h4">
                    {video.snippet.title} : {video.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle1">
                {video.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                    {video.snippet.description}
                </Typography>
            </Paper>
        </React.Fragment>
        
    )
}

export default VideoDetail;