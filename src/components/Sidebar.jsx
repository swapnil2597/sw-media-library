import { Stack } from '@mui/material';
import React from 'react';
import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory, setselectedCategory}) => (
  <Stack
    direction='row'
    sx={{
      overFlowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
      borderBottom: '1px solid #222',
      pt:2
    }}
  >
    {categories.map((category) => (
      <button
        className='sidebar__categoryButton category-btn'
        key={category.name}
        onClick={() => setselectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && '#a6180e55',
          color: '#fff',
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? '#fff' : '#a6180e',
          }}
        >
          {category.icon}
        </span>
        <span
        style={{
            opacity: category.name === selectedCategory ? 1 : 0.7,
          }}
        >{category.name}</span>
      </button>
    ))}
  </Stack>
);
// }

export default Sidebar;
