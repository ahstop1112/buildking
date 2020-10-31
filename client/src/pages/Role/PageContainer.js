import React, { useEffect, useContext } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import RoleContext from '../../store/context/Role';
import { getAllRole } from '../../services/Data';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = props => {
  const role = useContext(RoleContext);

  useEffect(() => {
    getAllRole()
      .then(response => {
        // console.log(response);
        if (response.data.data){
          // console.log(response);
          let roles_data = response.data.data;
          role.dispatch({type: 'INITIAL_ROLES', roles_data});
        }
      })
      .catch(error => {
      });
  
  }, []);

  return ( 
    <React.Fragment>
      <Helmet title="Roles" />
      <Typography variant="h3" gutterBottom>
        Roles
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/web/admin/projects">
              Admin
          </Link>
          <Typography>Roles</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <AddButtonContainer container item lg={12} md={12} spacing={2} justify="flex-end">
        <Button
          href={`/web/admin/roles/add`}
          variant="contained"
          color="primary"
          size="large"
          target="_self"
        >
          Add New Role
        </Button>
      </AddButtonContainer>
      <Grid container item lg={12} md={12}>
        <DataTable />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageContainer;