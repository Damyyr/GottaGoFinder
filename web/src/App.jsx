import React from 'react';
import { Typography, AppBar, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Folder, FolderOpen, BugReport, FileCopy } from '@material-ui/icons'
import FetchPath from './components/FetchPath';
const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                             GottaGoFinder
                         </Typography>
                         <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                             Pas sur de savoir ou la searchbar s'en va
                         </Typography>
                    </Container>

            <FetchPath >
                
            </FetchPath>

                </div>
            </main>
        </>
    )
}

export default App;