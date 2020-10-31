import React, { useContext, useEffect } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import DivisionContext from '../../store/context/Division';
import { getProjectById, getDivisionById } from '../../services/Data';
import Form from './Form';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageAddEditContainer = props => {
  const {pageType, editId } = props;
  const division = useContext(DivisionContext);
  const divisionState = division.state;
  let projectId = pageType.split('/')[4] ? pageType.split('/')[4] : null;
  let divisionId = pageType.split('/')[7] ? pageType.split('/')[7] : null;

  console.log(divisionId);

  useEffect(() => {
    getProjectById(projectId)
    .then(response => {
      if (response.data.data){
        let project_data = response.data.data;
        let projectName = project_data[0]['name'];
        console.log(projectName);
        division.dispatch({type: 'INITIAL_PROJECT_NAME', projectName});
      }
    })

    if (pageType.includes('edit')){

      getDivisionById(divisionId)
      .then(response => {
        console.log(response);
        if (response.data.data){
          let division_data = response.data.data;
          division.dispatch({type: 'INITIAL_UPDATE_DIVISION', division_data});
        }
      })
      .catch(error => {
        // if (error.response) {
        //   setIsInvalid(true);
        //   setIsFetching(false);
        // }
      });
    }

  }, []);

  return ( 
    <React.Fragment>
      <Helmet title="Divisions" />
      <Typography variant="h3" gutterBottom>
        Divisions
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} exact to="/web/admin/projects">
            Admin
          </Link>
          <Link component={NavLink} exact to="/web/admin/projects">
            Projects
          </Link>
          <Link component={NavLink} exact to={`/web/admin/projects/${projectId}/divisions`}>
            {divisionState.projectName}
          </Link>
          {pageType.includes('add') ? <Typography>Add New Division</Typography> :
            pageType.includes('edit') ? <Typography>Edit Division</Typography> : null
          }
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} md={12}>
        <AddButtonContainer container item lg={6} md={6}>
          {pageType.includes('add') ? 
              <h2>Add New Division</h2>
            : <h2>Edit Division : {divisionState.updateDivision['name']}</h2>
          }
          </AddButtonContainer>
          <Grid container item lg={6} md={6} justify="flex-end">
            <Button
              href={`/web/admin/projects/${projectId}/divisions`}
              color="primary"
              size="medium"
              target="_self"
            >
              Back
            </Button>
          </Grid>
      </Grid>
      <Grid container item lg={12} md={12}>
        <Form pageType={pageType} projectId={projectId} editId={editId} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageAddEditContainer;