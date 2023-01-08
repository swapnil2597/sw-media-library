
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as youtubeAPI from '../utils/youtubeApi';
import VideoFeed from './VideoFeed';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    youtubeAPI.getSearchResults(searchTerm).then((data) => {
      setVideosList(data?.items);
    });
  }, [searchTerm]);

  console.log('search videolist inside search feed', videosList);
  return (
    <div>
        {/* banner image */}
        <div
            style={{ 
                width: "100vw", height: 300, 
                // borderRadius: "12px",
                textAlign: "center",
                background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(108,28,22,1) 100%)',
                display: 'flex',
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
                // border: "1px solid #333",
                // boxShadow: "0px 0px 50px #333"
            }}
            // alt={channelDetails?.brandingSettings?.channel?.title}
            // src={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
            // src={channelDetails?.snippet?.thumbnails?.high?.url}
            // src="https://images.pexels.com/photos/2232979/pexels-photo-2232979.jpeg?auto=compress&cs=tinysrgb&w=800"
        >
            <span style={{color:"#fff", fontWeight:"700", fontSize: "70px" }} > Showing results for <span style={{color: "red"}}>{` ${searchTerm}:`}</span> </span>
        </div>


      {/*  channel videos list */}
      <VideoFeed videos={videosList} />
    </div>
  );
};

export default SearchFeed;