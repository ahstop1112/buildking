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
  const {pageType, formTemplateId } = props;
  return ( 
    <React.Fragment>
      <Helmet title="Form Templates" />
      <Typography variant="h3" gutterBottom>
        Form Templates
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} exact to="/web/admin/form-templates">
            Admin
          </Link>
          <Link component={NavLink} exact to="/web/admin/form-templates">
            Form Templates
          </Link>
          {pageType.includes('add') ? <Typography>Add New Form Template</Typography> :
            pageType.includes('edit') ? <Typography>Edit Form Template</Typography> : null
          }
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} md={12}>
        <AddButtonContainer container item lg={6} md={6}>
          {pageType.includes('add') ? 
              <h3>Add New Form Template</h3>
            : <h3>Edit Form Template</h3>
          }
          </AddButtonContainer>
          <Grid container item lg={6} md={6} justify="flex-end">
            <Button
              href={`/web/admin/form-templates`}
              color="primary"
              size="medium"
              target="_self"
            >
              Back
            </Button>
          </Grid>
      </Grid>
      <Grid container item lg={12} md={12}>
        <Form pageType={pageType} formTemplateId={formTemplateId} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageAddEditContainer;