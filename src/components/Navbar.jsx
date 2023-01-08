import { Avatar, Stack } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NoteAddSharpIcon from '@mui/icons-material/NoteAddSharp';
import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        background: '#111',
        top: 0,
        justifyContent: 'space-between',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
        <span className='navbar__logoText' >Swapnil's Media Library</span>
      </Link>

      {/* search bar */}
      <SearchBar />

      {/* navbar right section */}
      <Stack direction='row'
      alignItems='center' gap={3}>
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <NoteAddSharpIcon sx={{ color: "#ddd", fontSize: 30 }} />
      </Link>
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <NotificationsNoneOutlinedIcon sx={{ color: "#ddd", fontSize: 30 }} />
      </Link>
        <Avatar src='https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&w=800' /> 
      </Stack>
    </Stack>
  );
};

export default Navbar;
