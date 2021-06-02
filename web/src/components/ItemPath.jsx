import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableFooter } from '@material-ui/core';
import readableUnitHelper from '../helpers/ReadableUnitHelper';

const styles = {
  table: {
    'margin-bottom': '30px'
  }
};

export default class ItemPaths extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        paths: this.props.fetchedPaths
    }
}

componentDidMount(){
  this.setState({ paths: this.props.fetchedPaths })
}


  render() {
    const { paths } = this.state;

    return (
      <React.Fragment>
        <Table size="small" style={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Pathname</TableCell>
              <TableCell>Last Modified At</TableCell>
              <TableCell align="right">Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paths && paths.map((path) => (
              <TableRow key={Math.random()}>
                <TableCell>{path.isDirectory ? 'Directory' : 'File'}</TableCell>
                <TableCell>{path.path}</TableCell>
                <TableCell>{path.lastModified}</TableCell>
                <TableCell align="right">{readableUnitHelper(path.size)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
              <TableCell>Element{paths && paths.length > 1 ? 's' : ''}: {paths && paths.length}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">Total: {paths && readableUnitHelper(paths.reduce((t, path)=>t + path.size, 0))}</TableCell>
          </TableFooter>
        </Table>
      </React.Fragment>
    )
  }
}