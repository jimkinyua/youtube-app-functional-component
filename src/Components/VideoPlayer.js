import React from 'react';

const VideoPlayer = ({videoToPlay})=>{

    if(videoToPlay){
        console.log(videoToPlay)

        const url = `https://www.youtube.com/embed/${videoToPlay.id.videoId}`;
        return (
            
            <iframe width="600" height="315"
                src={url}>
            </iframe>
        )
    }
    console.log(videoToPlay)

    return(
        
        <div></div>
    )
    
}

export default VideoPlayer;