import React, { useContext } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import {Grid, Link} from '@material-ui/core';
import DivisionContext from '../../store/context/Division';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = () => {
  const division = useContext(DivisionContext);
  const divisionState = division.state;

  return ( 
    <React.Fragment>
      <Helmet title="Projects" />
      <Typography variant="h3" gutterBottom>
          Divisions
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} exact to="/admin/projects">
              Admin
          </Link>
          <Link component={NavLink} exact to="/admin/projects">
              Projects
          </Link>
          <Typography>{divisionState.divisions[0].project_name}</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} alignItems="center">
        <Grid container item lg={6} md={6} >
          <h2>{divisionState.divisions[0].project_name}</h2>
        </Grid>
        <AddButtonContainer container item lg={6} md={6} spacing={2} justify="flex-end">
          <Button
            href={`/add/division`}
            variant="contained"
            color="primary"
            size="large"
            target="_self"
          >
            Add New Division
          </Button>
        </AddButtonContainer>
      </Grid>
      <DataTable />
    </React.Fragment>
  );
}
 
export default PageContainer;