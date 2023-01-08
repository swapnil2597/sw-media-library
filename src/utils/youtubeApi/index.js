import axios from 'axios';

const YOUTUBE_V3_ENDPOINT_BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const configOptions = {
  method: 'GET',
  params: {
    maxResults: '50',
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': '5b3411edcbmsh0c66a797736ab07p1c2f7ajsnefd28d8e8ec0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const api = async (url) => {
  const { data } = await axios.get(
    `${YOUTUBE_V3_ENDPOINT_BASE_URL}/${url}`,
    configOptions
  );
  return data;
};

export const getSuggestedVideos = async () => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '5b3411edcbmsh0c66a797736ab07p1c2f7ajsnefd28d8e8ec0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  const { data } = await axios.request(options)
  return data;
};

export const getSuggestedVideosById = async (id) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: id,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5b3411edcbmsh0c66a797736ab07p1c2f7ajsnefd28d8e8ec0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  const { data } = await axios.request(options)
  return data;
};

export const getChannelDetails = async (id) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/channels',
    params: {part: 'snippet,statistics', id: id},
    headers: {
      'X-RapidAPI-Key': '5b3411edcbmsh0c66a797736ab07p1c2f7ajsnefd28d8e8ec0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const { data } = await axios.request(options)
  return data;
};

export const getChannelVideos = async (id) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      channelId: id,
      part: 'snippet,id',
      order: 'date',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5b3411edcbmsh0c66a797736ab07p1c2f7ajsnefd28d8e8ec0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const { data } = await axios.request(options)
  return data;
};

export const getSearchResults = async (searchTerm) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: searchTerm,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '5b3411edcbmsh0c66a797736ab07p1c2f7ajsnefd28d8e8ec0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  const { data } = await axios.request(options)
  return data;
};

export const getVideoDetailsById = async (id) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/videos',
    params: {part: 'contentDetails,snippet,statistics', id: id},
    headers: {
      'X-RapidAPI-Key': '5b3411edcbmsh0c66a797736ab07p1c2f7ajsnefd28d8e8ec0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  const { data } = await axios.request(options)
  return data;
};
