import { Typography, FormControl, InputLabel, OutlinedInput, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import ItemPath from './ItemPath'
import React from 'react';

function handleChange(event){
    console.log('yoywww')
    //setName(event.target.value);
}

export default class FetchPath extends React.Component {
    state = {
        loading: true,
        firsty: null,
        paths: []
    };

    async componentDidMount(){
        const url = "http://localhost:8080/api/paths?path=/home/damyyr"
        const response = await fetch(url)
        const data = await response.json();
        this.setState({firsty: response[0], paths: data, loading: false})
    }

    
    
    
    render() {
        return (
            <div>
                <div align="center">
                <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined-full">Enter a path</InputLabel>
        <OutlinedInput fullWidth id="component-outlined" value={"./"} onChange={handleChange()} label="Enter a path" />
      </FormControl>
                </div>
            


            
                {this.state.loading || this.state.paths?.length === 0 ? (
                    <div>loading...</div>
                ) : (
                    // <div>{this.state.paths}</div>
                    <div>
                        <Container>
                        <Grid item xs={12}>
                <ItemPath fetchedPaths = {this.state.paths}/>
            </Grid>
                        </Container>
                        </div>
                )}
            </div>
        )
    }

    
}