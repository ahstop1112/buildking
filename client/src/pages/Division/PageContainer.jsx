import React, { useContext, useEffect } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import {Grid, Link} from '@material-ui/core';
import DivisionContext from '../../store/context/Division';
import { getAllDivision, getProjectById } from '../../services/Data';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer, Title } from './Styles';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = props => {
  const division = useContext(DivisionContext);
  const divisionState = division.state;
  const { pageType } = props;
  let projectId = pageType.split('/')[4] ? pageType.split('/')[4] : null;

  useEffect(() => {
    getProjectById(projectId)
    .then(response => {
      
      if (response.data.data){
        let project_data = response.data.data;
        let projectName = project_data[0]['name'];
        // console.log(projectName);
        division.dispatch({type: 'INITIAL_PROJECT_NAME', projectName});
      }
    })
    .catch(error => {
      // if (error.response) {
      //   setIsInvalid(true);
      //   setIsFetching(false);
      // }
    });

    getAllDivision(projectId)
    .then(response => {
      // console.log(response);
      if (response.data.data){
        let divisions_data = response.data.data;
        division.dispatch({type: 'INITIAL_DIVISIONS', divisions_data});
      }
    })
    .catch(error => {
      // if (error.response) {
      //   setIsInvalid(true);
      //   setIsFetching(false);
      // }
    });

  }, []);

  return ( 
    <React.Fragment>
      <Helmet title="Divisions" />
      <Typography variant="h3" gutterBottom>
          Divisions
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/web/admin/projects">
              Admin
          </Link>
          <Link component={NavLink} to="/web/admin/projects">
              Projects
          </Link>
          <Typography>{divisionState.projectName}</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} alignItems="center">
        <Grid container item lg={6} md={6} >
          <Title>{divisionState.projectName}</Title>
        </Grid>
        <AddButtonContainer container item lg={6} md={6} spacing={2} justify="flex-end">
          <Button
            href={`/web/admin/projects/${projectId}/divisions/add`}
            variant="contained"
            color="primary"
            size="large"
            target="_self"
          >
            Add New Division
          </Button>
        </AddButtonContainer>
      </Grid>
      {divisionState.divisions.length > 0 && <DataTable projectId={projectId} />}
      {divisionState.divisions.length === 0 && <h2>No Record!</h2>}
    </React.Fragment>
  );
}
 
export default PageContainer;