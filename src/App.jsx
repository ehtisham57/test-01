// src/App.jsx

import { Provider } from 'react-redux';
import { store } from './app/store';
import Input from './components/Input/Input';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Typography variant="h1" component="h4" align="center" gutterBottom>
            Search GitHub Users
          </Typography>
          <Input />
          <List />
          <Modal />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
