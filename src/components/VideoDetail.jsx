import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import * as youtubeAPI from '../utils/youtubeApi';
import { useParams } from 'react-router-dom';
import VideoFeed from './VideoFeed';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState([])

  useEffect(() => {
    youtubeAPI.getVideoDetailsById(id).then((data) => {
      setVideoDetail(data?.items[0]);
    });
    youtubeAPI.getSuggestedVideosById(id).then((data) => {
        setSuggestedVideos(data?.items);
      });
  }, [id]);

  console.log("video detail", videoDetail)
  console.log("suggested videos -----------", suggestedVideos)


  return (
    <Box
      sx={{
        minHeight: '95vh',
        // background: "#555"
      }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} p={3}>
          <Box
            sx={{
              width: '100%',
            //   position: 'sticky',
              top: '86px',
            }}
            
          >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" playing={true} />
            <h1 style={{marginLeft: "10px"}} className='videoDetailMain__title' >{videoDetail?.snippet?.title}</h1>
          </Box>
          <div className='videoDetailMain__discBox' >{videoDetail?.snippet?.description}</div>
        </Box>
        <Box flex={0.3}>
             <VideoFeed videos={suggestedVideos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
