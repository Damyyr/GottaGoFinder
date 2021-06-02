import { FormControl, InputLabel, OutlinedInput, Button, Grid, Container, CircularProgress } from '@material-ui/core';
import ItemPath from './ItemPath'
import React from 'react';

const DEFAULT_SEARCH_VALUE = './';
const ENTER_KEY = "Enter";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchButton: {
    marginLeft: '16px',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '76px',
  }
};

export default class FetchPath extends React.Component {
  state = {
    loading: true,
    paths: [],
    searchValue: DEFAULT_SEARCH_VALUE,
  };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const { searchValue } = this.state;
    this.setState({ loading: true });
    try {
      const url = `http://localhost:8080/api/paths?path=${searchValue}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({paths: data, loading: false});
    } catch (e) {
      console.error('error', e);
      this.setState({loading: false});
    }
  }

  handleChange = (event) => this.setState({ searchValue: event.target.value });
  
  search = async () => await this.fetchData();

  keyPress = (event) => {
    if (event.key === ENTER_KEY) {
      return this.search();
    }
  }


  render() {
    const { paths, searchValue } = this.state;

    return (
      <>
        <Container style={styles.container}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined-full">Enter a path</InputLabel>
            <OutlinedInput
              fullWidth
              id="component-outlined"
              value={searchValue}
              onChange={this.handleChange}
              onKeyDown={this.keyPress}
              label="Enter a path"
            />
          </FormControl>
          <Button
            style={styles.searchButton}
            variant="contained"
            onClick={this.search}
            color="primary">Search</Button>
        </Container>
      
        <Container style={styles.itemContainer}>
          {this.state.loading || this.state.paths?.length === 0 ? (<CircularProgress />) : (
            <Grid item xs={12}>
              <ItemPath fetchedPaths={paths} />
            </Grid>
          )}
        </Container>
      </>
    )
  }
}