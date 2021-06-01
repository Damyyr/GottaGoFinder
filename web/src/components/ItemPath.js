import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableFooter } from '@material-ui/core';


export default class ItemPaths extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        paths: this.props.fetchedPaths
    }
}

async componentDidMount(){
    // console.log(this.state)
    // this.state.paths.map((path) => (
    //     console.log(path)
    // ))
}


  render() {
    return (
        <React.Fragment>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Pathname</TableCell>
                <TableCell>Last Modified At</TableCell>
                <TableCell align="right">Size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.paths.map((path) => (
                <TableRow key={Math.random()}>
                  <TableCell>{path.isDirectory ? 'Directory' : 'File'}</TableCell>
                  <TableCell>{path.path}</TableCell>
                  <TableCell>{path.lastModified}</TableCell>
                  <TableCell align="right">{path.size}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
                <TableCell>Element{this.state.paths.length > 1 ? 's' : ''}: {this.state.paths.length}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Total: {this.state.paths.reduce((t, path)=>t + path.size, 0)}</TableCell>
            </TableFooter>
          </Table>
        </React.Fragment>
      )
  }
}