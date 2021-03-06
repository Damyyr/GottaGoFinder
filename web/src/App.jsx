import React from 'react';
import { Typography, AppBar, CssBaseline } from '@material-ui/core';
import FetchPath from './components/FetchPath.jsx';

const styles = {
  title: {
    width: '100%',
    margin: '20px',
    color: 'white'
  },
  headText:{
    color: 'white'
  },
  appBar:{
    paddingBottom: '5px',
    marginBottom: '20px'
  }
};
  

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" style={styles.appBar}>
        <Typography style={styles.title} variant="h2" align="center" gutterBottom>
          GottaGoFinder
        </Typography>
        <Typography style={styles.headText}  variant="h6" align="center" color="textSecondary" gutterBottom>
          Make the finder great again
        </Typography>
      </AppBar>

      <main>
        <div>
          <FetchPath />
        </div>
      </main>
    </>
  )
}

export default App;