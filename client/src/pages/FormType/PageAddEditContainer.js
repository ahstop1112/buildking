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
  const {pageType, FormTypeId } = props;

  return ( 
    <React.Fragment>
      <Helmet title="FormTypes" />
      <Typography variant="h3" gutterBottom>
          Form Types
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} exact to="/web/admin/projects">
            Admin
          </Link>
          <Typography>
            Form Types
          </Typography>
      </Breadcrumbs>
      <Divider my={6} />
      {pageType.includes('add') ? 
        <AddButtonContainer container item lg={12} md={12} spacing={2}>
          <h3>Add New Form Type</h3>
        </AddButtonContainer>
        : null
      }
      <Grid container item lg={12} md={12}>
        <Form pageType={pageType} FormTypeId={FormTypeId} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageAddEditContainer;