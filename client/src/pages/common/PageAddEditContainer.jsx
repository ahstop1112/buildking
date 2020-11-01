import React, { useContext, useEffect } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Typography, Button, Divider, AddButtonContainer } from './Styles';
import { getItemById, getProjectById } from '../../services/Data';
import BreadcrumbLv1 from './BreadcrumbLv1';
import BreadcrumbLv2 from './BreadcrumbLv2';
import BreadcrumbLv3 from './BreadcrumbLv3';
import Form from './Form';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageAddEditContainer = props => {
  const { pageAction, projectId, updateItemId, context } = props;
  const page = useContext(context);
  const pageState = page.state;

  useEffect(() => {
    if (pageAction.includes('edit')){
      getItemById(
        pageState['tableName'], 
        pageState['columns'],
        pageState['checkColumn'],
        updateItemId
      )
        .then(response => {
          console.log(response);
          if (response.data.data){
            let update_item = response.data.data[0];
            let item_name = response.data.data[0]['name'];
            page.dispatch({type: 'INITIAL_UPDATE_ITEM', update_item, item_name});
          }
        })
        .catch(error => {
        });
    }

    if (pageState['pageId'] === 'division'){
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
    }
  }, []);

  console.log(pageState['pageId']);

  return ( 
    <React.Fragment>
      {pageAction.includes('add') ? 
        <Helmet title={`Add New ${pageState['pageName']}`} />
        : pageAction.includes('edit') ?
        <Helmet title={`Edit ${pageState['pageName']}`} />
        : ''
      }
      <Typography variant="h3" gutterBottom>
        {pageState['pageName']}
      </Typography>
      {/* Level 1 */}
      {pageState['pageId'] !== 'division' && pageState['pageName'] !== 'Form' &&
        !pageAction.includes('add') && !pageAction.includes('edit') && 
        <BreadcrumbLv1 lv1={pageState['pageName']} />}
      {/* Level 2 */}
      {/* Level 1 */}
      {pageState['pageId'] !== 'division' &&  pageState['pageName'] !== 'Form' && pageAction.includes('add') && 
        <BreadcrumbLv2
          lv1={pageState['pageName']}  lv1Link={pageState['pageId']}
          lv2={`Add New ${pageState['pageName']}`}
        />}
      {pageState['pageId'] !== 'division' &&  pageState['pageName'] !== 'Form' && pageAction.includes('edit') && 
        <BreadcrumbLv2
          lv1={pageState['pageName']}  lv1Link={pageState['pageId']}
          lv2={`Edit ${pageState['pageName']}`}
        />}
      {pageState['pageId'] === 'division' && !pageAction.includes('add') && !pageAction.includes('edit') &&
        <BreadcrumbLv2
          lv1="Project" lv1Link="project" 
          lv2={pageState['projectName']} lv2Link={`/web/admin/project/${projectId}/division`}
        />}
      {/* Level 3 */}
      {pageState['pageId'] === 'division' && pageAction.includes('add') &&
        <BreadcrumbLv3
          lv1="Project" lv1Link="project" 
          lv2={pageState['projectName']} lv2Link={`/web/admin/project/${projectId}/division`}
          lv3={`Add New ${pageState['pageName']}`}
        />}
      {pageState['pageId'] === 'division' &&  pageAction.includes('edit') &&
        <BreadcrumbLv3
          lv1="Project" lv1Link="project" 
          lv2={pageState['projectName']} lv2Link={`/web/admin/project/${projectId}/division`}
          lv3={`Edit ${pageState['pageName']}`}
        />}
      <Divider my={6} />

      <Grid container item lg={12} md={12}>
        <AddButtonContainer container item lg={6} md={6}>
          {pageAction.includes('add') && <h3>Add New {pageState['pageName']}</h3>}
          {pageAction.includes('edit') && <h3>Edit {pageState['pageName']} - {pageState['updateItemName']}</h3>}
        </AddButtonContainer>
        <Grid container item lg={6} md={6} justify="flex-end">
          {pageState['pageId'] !== 'division' && 
          <Button
            href={`/web/admin/${pageState['pageId']}`}
            color="primary" size="medium" target="_self"
          >
            Back
          </Button>}
          {pageState['pageId'] === 'division' && <Button
            href={`/web/admin/project/${projectId}/division`}
            color="primary" size="medium" target="_self"
          >
            Back
          </Button>}
        </Grid>
      </Grid>
      <Grid container item lg={12} md={12}>
        <Form context={context} pageAction={pageAction} 
          projectId={projectId} updateItemId={updateItemId} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageAddEditContainer;