import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Typography, Button, Divider, AddButtonContainer, Title } from './Styles';
import { getAllData, getProjectById, getDivisionById } from '../../services/Data';
import BreadcrumbLv1 from './BreadcrumbLv1';
import BreadcrumbLv2 from './BreadcrumbLv2';
import BreadcrumbLv3 from './BreadcrumbLv3';
import DataTable from './DataTable';
import DataTableTabs from './DataTableTabs';

const PageContainer = props => {
  const { context, projectId, divisionId } = props;
  const page = useContext(context);
  const pageState = page.state;

  console.log(pageState);

  useEffect(() => {

    if (pageState['pageId'] === 'form'){
      let where = [["deleted", "=", "0", "AND"], 
                   ["division_id", "=", `${divisionId}`, "AND"]];
      getAllData(
        pageState['tableName'], 
        pageState['columns'],
        where
      )
      .then(response => {
        if (response.data.data){
          let all_data = response.data.data;
          page.dispatch({type: 'INITIAL_ALL_DATA', all_data});
        }
      })
      .catch(error => {
      });

      getProjectById(projectId)
      .then(response => {
        console.log(response);
        if (response.data.data){
          let project_data = response.data.data;
          let projectName = project_data[0]['name'];
          // console.log(projectName);
          page.dispatch({type: 'INITIAL_PROJECT_NAME', projectName});
        }
      })
      .catch(error => {

      });

      getDivisionById(divisionId)
      .then(response => {
        console.log(response);
        if (response.data.data){
          let division_data = response.data.data;
          let divisionName = division_data[0]['name'];
          // console.log(divisionName);
          page.dispatch({type: 'INITIAL_DIVISION_NAME', divisionName});
        }
      })
      .catch(error => {

      });
    }else if (pageState['pageId'] === 'division'){
      let where = [["deleted", "=", "0", "AND"], 
                   ["project_id", "=", `${projectId}`, "AND"]];
      getAllData(
        pageState['tableName'], 
        pageState['columns'],
        where
      )
      .then(response => {
        if (response.data.data){
          let all_data = response.data.data;
          page.dispatch({type: 'INITIAL_ALL_DATA', all_data});
        }
      })
      .catch(error => {
      });

      getProjectById(projectId)
      .then(response => {
        console.log(response);
        if (response.data.data){
          let project_data = response.data.data;
          let projectName = project_data[0]['name'];
          console.log(projectName);
          page.dispatch({type: 'INITIAL_PROJECT_NAME', projectName});
        }
      })
      .catch(error => {

      });
    }else{
      getAllData(
        pageState['tableName'], 
        pageState['columns'],
        pageState['where']
      )
      .then(response => {
        if (response.data.data){
          let all_data = response.data.data;
          page.dispatch({type: 'INITIAL_ALL_DATA', all_data});
        }
      })
      .catch(error => {
      });
    }
  
  }, []);

  return ( 
    <React.Fragment>
      <Helmet title={pageState['pageName']} />
      <Typography variant="h3" gutterBottom>
        {pageState['pageName']}
      </Typography>
      {pageState['pageName'] !== 'Division' && pageState['pageName'] !== 'Form' && 
        <BreadcrumbLv1 lv1={pageState['pageName']} />}
      {pageState['pageName'] === 'Division' ? 
        <BreadcrumbLv2 lv1="Project" lv1Link="project" lv2={pageState['projectName']} /> : ''
      }
      {pageState['pageName'] === 'Form' &&
        <BreadcrumbLv3 lv1="Project" lv1Link="project" 
          lv2={pageState['projectName']} lv2Link={`project/${projectId}/division`}
          lv3={pageState['divisionName']}
        /> }
      <Divider my={6} />
      <Grid container item lg={12} md={12} alignItems="center">
        <Grid container item lg={6} md={6} >
          {pageState['pageId'] === 'division' && <Title>{pageState['projectName']}</Title>}
          {pageState['pageId'] === 'form' && <Title>{pageState['divisionName']}</Title>}
        </Grid>
        <AddButtonContainer container item lg={6} md={6} justify="flex-end">
          {pageState['pageId'] !== 'division' && pageState['pageId'] !== 'form' && 
            <Button
              href={`/web/admin/${pageState['pageId']}/add`}
              variant="contained"
              color="primary"
              size="large"
              target="_self"
            >
              Add New {pageState['pageName']}
            </Button>}
          {pageState['pageId'] === 'division' && <Button
              href={`/web/admin/project/${projectId}/division/add`}
              variant="contained"
              color="primary"
              size="large"
              target="_self"
            >
              Add New {pageState['pageName']}
            </Button>}
        </AddButtonContainer>
      </Grid>
      <Grid container item lg={12} md={12}>
        {pageState['pageId'] !== 'form' && pageState['data'].length > 0 && <DataTable context={context} projectId={projectId} />}
        {pageState['pageId'] === 'form' && pageState['data'].length > 0 && <DataTableTabs context={context} divisionId={divisionId} />}
        {pageState['data'].length === 0 && <h2>No Record!</h2>}
      </Grid>
    </React.Fragment>
  );
}
 
export default PageContainer;

