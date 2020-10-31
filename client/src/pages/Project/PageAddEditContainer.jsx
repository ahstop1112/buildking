import React, { useEffect, useContext } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Typography, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import ProjectContext from '../../store/context/Project';
import { getProjectById } from '../../services/Data';
import Form from './Form';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageAddEditContainer = props => {
  const {pageType, projectId } = props;
  const project = useContext(ProjectContext);
  const projectState = project.state;

  useEffect(() => {
    if (pageType.includes('edit')){
      getProjectById(projectId)
        .then(response => {
          // console.log(response);
          if (response.data.data){
            let update_project = response.data.data;
            project.dispatch({type: 'INITIAL_UPDATE_PROJECT', update_project});
          }
        })
        .catch(error => {
        });
    }
  }, []);

  return ( 
    <React.Fragment>
      <Helmet title="Projects" />
      <Typography variant="h3" gutterBottom>
          Projects
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} exact to="/web/admin/projects">
            Admin
          </Link>
          <Link component={NavLink} exact to="/web/admin/projects">
            Projects
          </Link>
          {pageType.includes('add') ? <Typography>Add New Project</Typography> :
            pageType.includes('edit') ? <Typography>Edit Project</Typography> : null
          }
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} md={12}>
        <AddButtonContainer container item lg={6} md={6}>
          {pageType.includes('add') ? 
              <h2>Add New Project</h2>
            : <h2>Edit Project: {projectState.updateProject.name}</h2>
          }
          </AddButtonContainer>
          <Grid container item lg={6} md={6} justify="flex-end">
            <Button
              href={`/web/admin/projects`}
              color="primary"
              size="medium"
              target="_self"
            >
              Back
            </Button>
          </Grid>
      </Grid>
      <Grid container item lg={12} md={12}>
        <Form pageType={pageType} projectId={projectId} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageAddEditContainer;