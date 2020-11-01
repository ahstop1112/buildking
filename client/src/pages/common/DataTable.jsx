import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow,
    Dialog, DialogActions, DialogContent,DialogContentText
  } from "@material-ui/core";
import { Card, Paper, Button } from './Styles';

const DataTable = props => {
  const { context, projectId } = props;
  const page = useContext(context);
  const pageState = page.state;
  const [open, setOpen] = useState(false);
  let pageAction = useLocation().pathname;

  console.log(pageState);

    return (
        <Card mb={6}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  {pageState['columns']
                    .filter(row => row !== 'extra' &&  row !== 'template' && 
                            row !== 'first_name' && row !== 'last_name' && 
                            row !== 'date_joined'
                          )
                    .map((row, index) => (
                    <TableCell key={index}>{row}</TableCell>
                  ))}
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {pageState['data'].map(row => (
                <TableRow key={row['id']}>
                  {pageState['columns']
                  .filter(row => row !== 'extra' &&  row !== 'template' && 
                      row !== 'first_name' && row !== 'last_name' && 
                      row !== 'date_joined'
                    )                    
                    .map((subRow, index) => (
                    <TableCell key={index}>{row[subRow]}</TableCell>
                  ))}
                  {pageState['pageId'] === 'project' &&
                    <TableCell>
                        <Button
                          href={`/web/admin/project/${row['id']}/division`}
                          variant="contained"
                          color="primary"
                          size="medium"
                          target="_self"
                        >
                          Details
                        </Button>
                      </TableCell>
                  }
                  {pageState['pageId'] === 'division' &&
                    <TableCell>
                        <Button
                          href={`/web/admin/project/${projectId}/division/${row['id']}/form`}
                          variant="contained"
                          color="primary"
                          size="medium"
                          target="_self"
                        >
                          Details
                        </Button>
                      </TableCell>
                  }
                  <TableCell>
                    <Button
                      href={`${pageAction}/edit/${row['id']}`}
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
                  Are you confirm to remove this {pageState['pageName']}?
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