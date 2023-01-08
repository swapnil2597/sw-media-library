import './App.css';
import './App.scss'
import * as ReactRouter from 'react-router-dom';
import {Box} from '@mui/material'
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <ReactRouter.BrowserRouter>
    <Box sx={{ backgroud:"#000" }} >
      {/* Navbar */}
      <Navbar />

      {/* page routes */}
      <ReactRouter.Routes>
        <ReactRouter.Route path='/' exact element={<Feed />} />
        <ReactRouter.Route path='/video/:id' element={<VideoDetail />} />
        <ReactRouter.Route path='/channel/:id' element={<ChannelDetail />} />
        <ReactRouter.Route path='/search/:searchTerm' element={<SearchFeed />} />
      </ReactRouter.Routes>
    </Box>
    </ReactRouter.BrowserRouter>
    
  );
}

export default App;
