import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import Routes from './routes';

import Theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
