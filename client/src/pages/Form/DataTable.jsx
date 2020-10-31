import React, { useContext, useState } from 'react';
import FormContext from '../../store/context/Form';
import {
    Grid, Link, Table, Box,
    TableBody, TableCell, TableHead, TableRow
  } from "@material-ui/core";
import { Card, Typography, Paper, Button, Tab, Tabs, TabButton, TabPanel } from './Styles';

const DataTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <TabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </TabPanel>
  );
}

const DataTable = () => {
    const form = useContext(FormContext);
    const formState = form.state;
    const [value, setValue] = useState(0);
    const items = formState.forms;
    const pendingItems = items.filter(item => item.state_id === 1);
    const completedtems = items.filter(item => item.state_id === 2);
    const rejectedItems = items.filter(item => item.state_id === 3);
    const followUpItems = items.filter(item => item.state_id === 4);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    console.log(formState);

    const tabTable = (itemList) => {

      return (
        <Card mb={6}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>Created Time</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {itemList.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {index+1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <b>{row.no}</b>
                    </TableCell>
                    <TableCell>{row.created_time}</TableCell>
                    <TableCell>
                      <Button
                        href={`https://cerebro.servehttp.com/formlist/html/genReport.php?form_id=${row.id}`}
                        variant="contained"
                        color="primary"
                        size="medium"
                        target="_blank"
                      >
                        Preview
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        href={`/admin/form/remove/${row.id}`}
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

    return (
      <Tab>
          <Tabs
            value={value}
            onChange={handleChange}
          >
            <TabButton label={`Pending (${pendingItems.length})`} />
            <TabButton label={`Completed (${completedtems.length})`} />
            <TabButton label={`Rejected (${rejectedItems.length})`} />
            <TabButton label={`Follow up (${followUpItems.length})`} />
          </Tabs>
          <DataTabPanel value={value} index={0}>
            {pendingItems.length > 0 && tabTable(pendingItems)}
          </DataTabPanel>
          <DataTabPanel value={value} index={1}>
            {completedtems.length > 0 && tabTable(completedtems)}
          </DataTabPanel>
          <DataTabPanel value={value} index={2}>
            {rejectedItems.length > 0 && tabTable(rejectedItems)}
          </DataTabPanel>
          <DataTabPanel value={value} index={3}>
            {followUpItems.length > 0 && tabTable(followUpItems)}
          </DataTabPanel>
        </Tab>
      );
}
 
export default DataTable;