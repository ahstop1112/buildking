import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import Form from './Form';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageAddEditContainer = props => {
  const {pageType, roleId } = props;
  return ( 
    <React.Fragment>
      <Helmet title="Roles" />
      <Typography variant="h3" gutterBottom>
          Roles
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} exact to="/web/admin/projects">
            Admin
          </Link>
          <Typography>
            Roles
          </Typography>
      </Breadcrumbs>
      <Divider my={6} />
      {pageType.includes('add') ? 
        <AddButtonContainer container item lg={12} md={12} spacing={2}>
          <h3>Add New Role</h3>
        </AddButtonContainer>
        : null
      }
      <Grid container item lg={12} md={12}>
        <Form pageType={pageType} roleId={roleId} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageAddEditContainer;