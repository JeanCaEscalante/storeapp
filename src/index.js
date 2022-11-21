import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import "@fontsource/lato"
import '@fontsource/lato/400.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#436436',
      contrastText: '#d2ff28',
    },
    secondary: {
      main: '#ff3403',
    },
    background: {
      default: '#d6f599',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 16,
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 10,
};

const theme = createTheme(themeOptions);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


