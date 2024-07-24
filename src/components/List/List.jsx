// src/components/List/List.jsx
import { useSelector } from 'react-redux';
import Item from '../Items/Item';
import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <Typography color="error" align="center">
        Error fetching users.
      </Typography>
    );
  }

  return (
    <List>
      {users.map((user) => (
        <Item key={user.login} user={user} />
      ))}
    </List>
  );
};

export default UserList;
