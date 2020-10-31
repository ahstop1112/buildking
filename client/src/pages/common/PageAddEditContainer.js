import React, { useContext, useEffect } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import Helmet from 'react-helmet';
import { Grid, Link } from '@material-ui/core';
import { Card, Typography, Paper, Button, Divider, Breadcrumbs, AddButtonContainer } from './Styles';
import { getItemById } from '../../services/Data';
import Form from './Form';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const PageAddEditContainer = props => {
  const { pageAction, updateItemId, context } = props;
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
  }, []);

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
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/web/admin/projects">
          Admin
        </Link>
        <Link component={NavLink} exact to={`/web/admin/${pageState['pageId']}`}>
          {pageState['pageName']}
        </Link>
        {pageAction.includes('add') ? 
          <Typography>Add New {pageState['pageName']}</Typography>
        : pageAction.includes('edit') ?
          <Typography>Edit {pageState['updateItemName']}</Typography>
        : ''}
      </Breadcrumbs>
      <Divider my={6} />
      <Grid container item lg={12} md={12}>
        <AddButtonContainer container item lg={6} md={6}>
          {pageAction.includes('add') && <h3>Add New {pageState['pageName']}</h3>}
          {pageAction.includes('edit') && <h3>Edit {pageState['pageName']} - {pageState['updateItemName']}</h3>}
        </AddButtonContainer>
        <Grid container item lg={6} md={6} justify="flex-end">
          <Button
            href={`/web/admin/${pageState['pageId']}/`}
            color="primary"
            size="medium"
            target="_self"
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container item lg={12} md={12}>
        <Form context={context} pageAction={pageAction} updateItemId={updateItemId} />
      </Grid>
    </React.Fragment>
  );
}
 
export default PageAddEditContainer;