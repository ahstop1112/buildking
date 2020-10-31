import React, { useContext, useEffect } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import {Grid, Link} from '@material-ui/core';
import formContext from '../../store/context/Form';
import { getAllForm, getProjectById, getDivisionById } from '../../services/Data';
import { Typography, Button, Divider, Breadcrumbs, AddButtonContainer, Title } from './Styles';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = props => {
  const form = useContext(formContext);
  const formState = form.state;
  const { pageType } = props;
  let projectId = pageType.split('/')[4] ? pageType.split('/')[4] : null;
  let divisionId = pageType.split('/')[6] ? pageType.split('/')[6] : null;
  // console.log(divisionId);

  useEffect(() => {
    getProjectById(projectId)
      .then(response => {
        
        if (response.data.data){
          let project_data = response.data.data;
          let projectName = project_data[0]['name'];
          // console.log(projectName);
          form.dispatch({type: 'INITIAL_PROJECT_NAME', projectName});
        }
      })
      .catch(error => {
        // if (error.response) {
        //   setIsInvalid(true);
        //   setIsFetching(false);
        // }
      });

    getDivisionById(divisionId)
      .then(response => {
        // console.log(response);
        if (response.data.data){
          let division_data = response.data.data;
          let divisionName = division_data[0]['name'];
          // console.log(divisionName);
          form.dispatch({type: 'INITIAL_DIVISION_NAME', divisionName});
        }
      })
      .catch(error => {
        // if (error.response) {
        //   setIsInvalid(true);
        //   setIsFetching(false);
        // }
      });

    getAllForm(divisionId)
      .then(response => {
        // console.log(response);
        if (response.data.data){
          // console.log(response);
          let forms_data = response.data.data;
          form.dispatch({type: 'INITIAL_FORMS', forms_data});
        }
      })
      .catch(error => {
        // if (error.response) {
        //   setIsInvalid(true);
        //   setIsFetching(false);
        // }
      });

  }, []);

  // console.log(formState)

  return ( 
    <React.Fragment>
      <Helmet title="Forms" />
      <Typography variant="h3" gutterBottom>
          Forms
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/web/admin/projects">
              Admin
          </Link>
          <Link component={NavLink} to="/web/admin/projects">
              Projects
          </Link>
          <Link component={NavLink} to={`/web/admin/projects/${projectId}/divisions`}>
              {formState.projectName}
          </Link>
          <Typography>{formState.divisionName}</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} alignItems="center">
        <Grid container item lg={6} md={6} >
          <Title>{formState.divisionName}</Title>
        </Grid>
      </Grid>
      {formState.forms.length > 0 && <DataTable divisionId={divisionId} />}
      {formState.forms.length === 0 && <h2>No Record!</h2>}
    </React.Fragment>
  );
}
 
export default PageContainer;