import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Feed.scss';
import VideoFeed from './VideoFeed';
import * as youtubeAPI from '../utils/youtubeApi';

const tabstyles = {
  color: '#fff',
  background: '#222',
  borderRadius: '5px',
  marginRight: '10px',
  p: 0,
  minHeight: "28px"
};

const selectedTabStyles = {
    color: '#000',
    background: '#ccc',
    borderRadius: '5px',
    marginRight: '10px',
    p: 0,
    minHeight: "28px"
  };

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    youtubeAPI.getSuggestedVideos().then((data) => {
      setVideosList(data?.items);
    });
  }, []);

  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' },
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #333',
          px: { sx: 0, md: 2 },
          background: '#000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Sidebar contents */}
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

        {/* copyrights section below sidebar */}
        <Typography
          sx={{
            color: '#777',
            mt: 1.5,
            // mb: 1.5
          }}
        >
          Copyrights 2023 swapnil2597
        </Typography>
      </Box>

      {/* main */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        {/* title section */}
        {/* <div className='main__titleSection'>
          <span className='title'>
            {selectedCategory === 'New' ? 'Home' : selectedCategory}
          </span>
          <span className='tag'>New Videos</span>
        </div> */}

        {/* mood tabs */}
        <Tabs
          variant='scrollable'
        //   scrollButtons='auto'
          scrollButtons={false}
          sx={{
            mt: 1,
            mb: 1.5,
          }}
        >
          <Tab sx={selectedTabStyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
          <Tab sx={tabstyles} label='music' />
        </Tabs>

        {/* main contents */}
        <VideoFeed videos={videosList} />
      </Box>
    </Stack>
  );
};

export default Feed;
