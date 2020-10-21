import React, { useContext } from 'react';
import DivisionContext from '../../store/context/Division';
import {
    Grid, Link, Table,
    TableBody, TableCell, TableHead, TableRow
  } from "@material-ui/core";
import { Card, Typography, Paper, Button, Divider, Breadcrumbs } from './Styles';

const DataTable = () => {
    const division = useContext(DivisionContext);
    const divisionState = division.state;

    console.log(divisionState.divisions);

    // "id": 7,
    //       "name": "ND201801_operation",
    //       "title": "Operation",
    //       "description": "",
    //       "project_id": 1,
    //       "deleted": 0,
    //       "project_name": "ND/2018/01"

    return (
        <Card mb={6}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {divisionState.divisions.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <b>{row.name}</b>
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>
                    <Button
                      href={`/admin/divisions/${row.id}/forms`}
                      variant="contained"
                      color="primary"
                      size="medium"
                      target="_self"
                    >
                      Details
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      href={`/admin/division/edit/${row.id}`}
                      variant="contained"
                      color="secondary"
                      size="medium"
                      target="_self"
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      href={`/admin/division/remove/${row.id}`}
                      variant="contained"
                      color="secondary"
                      size="medium"
                      target="_self"
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table>
          </Paper>
        </Card>
      );
}
 
export default DataTable;