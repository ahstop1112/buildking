import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = props => {
  return ( 
    <React.Fragment>
      <Helmet title="Form Templates" />
      <Typography variant="h3" gutterBottom>
        Form Templates
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/web/admin/projects">
              Admin
          </Link>
          <Typography>Form Templates</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <AddButtonContainer container item lg={12} md={12} spacing={2} justify="flex-end">
        <Button
          href={`/web/admin/form-templates/add`}
          variant="contained"
          color="primary"
          size="large"
          target="_self"
        >
          Add New Form Templates
        </Button>
      </AddButtonContainer>
      <Grid container item lg={12} md={12}>
        <DataTable />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageContainer;