import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link, Card, Tabs, Tab, Box } from '@material-ui/core';
import GridContainer from "components/GridContainer";
import GridItem from "components/GridItem";
import TextFieldCustomError from "components/TextFieldCustomError";
import styles from "assets/jss/pages/projectStyle";
import FormDetailContext from 'store/context/FormDetail';
import FormItem from 'pages/Form/Item';
import { primaryColor } from 'assets/jss/root';
const useStyles = makeStyles(styles);

const Container = props => {
  const classes = useStyles();
  const FormDetail = useContext(FormDetailContext);
  const FormDetailState = FormDetail.state;
  const [value, setValue] = useState(0);
  const form = FormDetailState.formDetail;
  const formFields = JSON.parse(form[0].data);

  console.log(formFields);

  return ( 
    <>
      <GridContainer className={classes.section} item container xs={12} sm={12} md={12} lg={12}>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="inherit" href="/admin/projects">
            Admin
          </Link>
          <Link color="inherit" href="/admin/projects">
            Projects
          </Link>
          <Link color="inherit" href={`/admin/project/${FormDetailState.division[0].project_id}/divisions`}>
            {FormDetailState.division[0].project_name}
          </Link>
          <Link color="inherit" href={`/admin/division/${FormDetailState.division[0].id}/forms`}>
            {FormDetailState.division[0].title}
          </Link>
          <Typography color="textPrimary" className={classes.breadcrumbCurrent}>
            {FormDetailState.formDetail[0].no}
          </Typography>
        </Breadcrumbs>
        <GridItem xs={12}>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} >
          <Card className={classes.formContainer}>
            <GridContainer>
              {Object.keys(formFields)
                // .filter(item => formFields[item] && formFields[item] !== 0)
                .map(item => 
                 <GridItem xs={12} sm={6}>
                  <TextFieldCustomError
                      label={item}
                      type="text"
                      value={formFields[item]}
                      id={item}
                      formcontrolprops={{
                        fullWidth: true
                      }}
                      errorHelperText="error"
                      // onChange={handleTextField(item)}
                      margin="none"
                  />
                
                </GridItem>
              )}
            </GridContainer>
            
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
 
export default Container;




