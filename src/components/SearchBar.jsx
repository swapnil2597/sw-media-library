import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
    }
    
  return (
   <Paper
   component="form"
   onSubmit={handleSubmit}
    sx={{
        borderRadius: 20,
        border: '1px solid #333',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        background: '#222'
    }}
   >
    <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    <IconButton type='submit' sx={{
        p: '10px',
        color: 'red'
    }} >
        <Search />
    </IconButton>
   </Paper>
  )
}

export default SearchBar