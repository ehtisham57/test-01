// src/components/Item/Item.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserDetails } from '../../features/users/usersSlice';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

const Item = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getUserDetails(user.login));
  };

  return (
    <ListItem button onClick={handleClick}>
      <ListItemAvatar>
        <Avatar src={user.avatar_url} alt={user.login} />
      </ListItemAvatar>
      <ListItemText
        primary={user.login}
        secondary={
          <Link href={user.html_url} target="_blank" rel="noopener noreferrer">
            Profile
          </Link>
        }
      />
    </ListItem>
  );
};

export default Item;
