// src/components/Modal/Modal.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../features/users/usersSlice';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const Modal = () => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearUser());
  };

  if (!user) {
    return null;
  }

  return (
    <Dialog open={!!user} onClose={handleClose}>
      <DialogTitle>{user.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Avatar src={user.avatar_url} alt={user.login} sx={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Location: {user.location}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Followers: {user.followers}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Following: {user.following}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
