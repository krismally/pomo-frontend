// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './Theme';
import { Box } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
          <Header />
          <Main />
          <Footer />
      </Box>
    </React.Fragment>
  );
}

export default App;
