import React, { useContext, useState } from 'react';
import RoleContext from '../../store/context/Role';
import {
    Grid, Link, Table,
    TableBody, TableCell, TableHead, TableRow,
    Dialog, DialogActions, DialogContent,DialogContentText
  } from "@material-ui/core";
import { Card, Typography, Paper, Button, Divider, Breadcrumbs } from './Styles';

const DataTable = () => {
    const role = useContext(RoleContext);
    const roleState = role.state;
    const [open, setOpen] = useState(false);

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
                </TableRow>
              </TableHead>
              <TableBody>
                {roleState.roles.map(row => (
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
                        href={`/web/admin/roles/edit/${row.id}`}
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
                        onClick={() => setOpen(true)}
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
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you confirm to remove this project?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="secondary">
                  Cancel
                </Button>
                <Button variant="contained" onClick={() => setOpen(false)} color="primary" autoFocus>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Card>
      );
}
 
export default DataTable;