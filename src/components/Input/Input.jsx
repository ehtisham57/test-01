// src/components/Input/Input.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../features/users/usersSlice';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Input = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        dispatch(getUsers(query));
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query, dispatch]);

  return (
    <Box sx={{ margin: '20px 0' }}>
      <TextField
        fullWidth
        label="Search for GitHub users..."
        variant="outlined"
        value={query}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Input;
