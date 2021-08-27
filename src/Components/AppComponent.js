import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideResults from './SideResults';

const AppComponent = ()=>{
    const [termToSearch, setTermToSearch] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const [debouncedText, setDebouncedText] = useState(termToSearch);

    useEffect(()=>{ 
        const timeoutId = setTimeout(()=>{
            if(termToSearch){
                setDebouncedText(termToSearch);

            }
        }, 500);

        return ()=>{
            console.log('Cleaning up.....')
            clearTimeout(timeoutId);
        }

    }, [termToSearch]);

    useEffect(()=>{

        const getSearchVideos = async ()=>{

            const {data} = await axios.get(
                "https://www.googleapis.com/youtube/v3/search",
                {
                  params: {
                    part: "snippet",
                    maxResults: 10,
                    key: "AIzaSyATZHwxgROKDBuhIS-VXMheGQXeThjXpsg",
                    q: debouncedText,
                  },
                }
              );

                setSearchResults(data.items)

        }
        if(debouncedText){
            getSearchVideos();

        }

    }, [debouncedText])

    return(
        <div>
            <div className ="ui raised very padded text container">
                <div className="ui form">
                    <br></br>
                        <div className="field">
                            <label> <h2> Enter Search Term </h2> </label>
                        </div>
                        <input className="prompt" type="text" value={termToSearch} onChange = {e =>{setTermToSearch(e.target.value)}}  placeholder="Search Video"/> 
                </div>
            </div>
            <SideResults SearchResults = {searchResults}/>
        </div>
       
  
    )
}

export default AppComponent;