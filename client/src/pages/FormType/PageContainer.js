import React, { useEffect, useContext } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import FormTypeContext from '../../store/context/FormType';
import { getAllFormType } from '../../services/Data';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = props => {
  const FormType = useContext(FormTypeContext);

  useEffect(() => {
    getAllFormType()
      .then(response => {
        // console.log(response);
        if (response.data.data){
          // console.log(response);
          let FormTypes_data = response.data.data;
          FormType.dispatch({type: 'INITIAL_FormTypeS', FormTypes_data});
        }
      })
      .catch(error => {
      });
  
  }, []);

  return ( 
    <React.Fragment>
      <Helmet title="FormTypes" />
      <Typography variant="h3" gutterBottom>
        FormTypes
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/web/admin/projects">
              Admin
          </Link>
          <Typography>FormTypes</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <AddButtonContainer container item lg={12} md={12} spacing={2} justify="flex-end">
        <Button
          href={`/web/admin/FormTypes/add`}
          variant="contained"
          color="primary"
          size="large"
          target="_self"
        >
          Add New FormType
        </Button>
      </AddButtonContainer>
      <Grid container item lg={12} md={12}>
        <DataTable />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageContainer;