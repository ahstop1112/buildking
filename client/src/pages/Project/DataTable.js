import React, { useContext } from 'react';
import ProjectContext from '../../store/context/Project';
import {
    Grid, Link, Table,
    TableBody, TableCell, TableHead, TableRow
  } from "@material-ui/core";
import { Card, Typography, Paper, Button, Divider, Breadcrumbs } from './Styles';

const DataTable = () => {
    const project = useContext(ProjectContext);
    const projectState = project.state;

    return (
        <Card mb={6}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Division(s)</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projectState.projects.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <b>{row.name}</b>
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell align="center">{row.divisions.length}</TableCell>
                    <TableCell>
                      <Button
                        href={`/admin/projects/${row.id}/divisions`}
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
                        href={`/admin/project/edit/${row.id}`}
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
                        href={`/admin/project/remove/${row.id}`}
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