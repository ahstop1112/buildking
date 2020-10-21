import React, { useContext } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import {Grid, Link} from '@material-ui/core';
import FormContext from '../../store/context/Form';
import { Typography, Button, Divider, Title, Breadcrumbs, AddButtonContainer } from './Styles';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = () => {
  const form = useContext(FormContext);
  const formState = form.state;

  console.log(formState.form);

  return ( 
    <React.Fragment>
      <Helmet title="Projects" />
      <Typography variant="h3" gutterBottom>
          Forms
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} exact to="/admin/projects">
              Admin
          </Link>
          <Link component={NavLink} exact to="/admin/projects">
              Projects
          </Link>
          <Link component={NavLink} exact to={`/admin/project/${formState.division[0].id}/divisions`}>
            {formState.division[0].project_name}
          </Link>
          <Typography>
            {formState.division[0].title}
          </Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} alignItems="center">
        <Grid container item lg={6} md={6} >
          <Title>{formState.division[0].title}</Title>
        </Grid>
        <AddButtonContainer container item  alignItems="center" lg={6} md={6} justify="flex-end">
          <Button
            href={`/add/division`}
            variant="contained"
            color="primary"
            size="large"
            target="_self"
          >
            Add New Form
          </Button>
        </AddButtonContainer>
      </Grid>
      <DataTable />
    </React.Fragment>
  );
}
 
export default PageContainer;