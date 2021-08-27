import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
const SideResults = ({SearchResults})=>{
    const [selectedVideo, setSelectedVideo] = useState(SearchResults[0])
    const videosToShow = SearchResults.map((searchResult, index)=>{
       
        return (
    
            <div class="item" key ={index} onClick = {()=>setSelectedVideo(searchResult)} >
                <div class="ui tiny image">
                    <img src={searchResult.snippet.thumbnails.high.url}/>
                </div>
                <div class="content">
                    <div class="header">{searchResult.snippet.title}</div>
                        <div class="description">
                            <p></p>
                        </div>
                    </div>
                </div>
           
        );
    })
    return(
        <div class="ui link items">
            {videosToShow}

            <VideoPlayer videoToPlay = {selectedVideo}></VideoPlayer>
        </div>
    )
}

export default SideResults;