import React, { useEffect, useContext } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Typography, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import ProjectsContext from '../../store/context/Project';
import { getAllProject } from '../../services/Data';
import DataTable from './DataTable';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageContainer = props => {
  const projects = useContext(ProjectsContext);

  useEffect(() => {
      getAllProject()
        .then(response => {
          if (response.data.data){
            let project_data = response.data.data;
            projects.dispatch({type: 'INITIAL_PROJECTS', project_data});
          }
        })
        .catch(error => {
          // if (error.response) {
          //   setIsInvalid(true);
          //   setIsFetching(false);
          // }
        });
    // }
  }, []);

  return ( 
    <React.Fragment>
      <Helmet title="Projects" />
      <Typography variant="h3" gutterBottom>
          Projects
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/web/admin/projects">
              Admin
          </Link>
          <Typography>Projects</Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <AddButtonContainer container item lg={12} md={12} spacing={2} justify="flex-end">
        <Button
          href={`/web/admin/projects/add`}
          variant="contained"
          color="primary"
          size="large"
          target="_self"
        >
          Add New Project
        </Button>
      </AddButtonContainer>
      <Grid container item lg={12} md={12}>
        <DataTable />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageContainer;