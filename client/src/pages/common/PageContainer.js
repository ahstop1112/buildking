import React, { useEffect, useContext } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import { getAllData } from '../../services/Data';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = props => {
  const { context } = props;
  const page = useContext(context);
  const pageState = page.state;

  console.log(context);

  useEffect(() => {
    getAllData(
      pageState['tableName'], 
      pageState['columns'],
      pageState['where']
    )
      .then(response => {
        console.log(response);
        if (response.data.data){
          let all_data = response.data.data;
          page.dispatch({type: 'INITIAL_ALL_DATA', all_data});
        }
      })
      .catch(error => {
      });
  
  }, []);

  return ( 
    <React.Fragment>
      <Helmet title={pageState['pageName']} />
      <Typography variant="h3" gutterBottom>
        {pageState['pageName']}
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/web/admin/projects">
              Admin
          </Link>
          <Typography>{pageState['pageName']}</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <AddButtonContainer container item lg={12} md={12} spacing={2} justify="flex-end">
        <Button
          href={`/web/admin/${pageState['pageId']}/add`}
          variant="contained"
          color="primary"
          size="large"
          target="_self"
        >
          Add New {pageState['pageName']}
        </Button>
      </AddButtonContainer>
      <Grid container item lg={12} md={12}>
        <DataTable context={context} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageContainer;

