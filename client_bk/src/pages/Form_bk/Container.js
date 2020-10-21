import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import GridContainer from "components/GridContainer";
import GridItem from "components/GridItem";
import styles from "assets/jss/pages/projectStyle";
import FormContext from 'store/context/Form';
import FormItem from 'pages/Form/Item';
import { primaryColor } from 'assets/jss/root';
const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Container = props => {
  const classes = useStyles();
  const Form = useContext(FormContext);
  const FormState = Form.state;
  const [value, setValue] = useState(0);
  const items = FormState.form;
  const pendingItems = items.filter(item => item.state_id === 1);
  const completedtems = items.filter(item => item.state_id === 2);
  const rejectedItems = items.filter(item => item.state_id === 3);
  const followUpItems = items.filter(item => item.state_id === 4);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  console.log(FormState);

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
          <Link color="inherit" href={`/admin/project/${FormState.division[0].project_id}/divisions`}>
            {FormState.division[0].project_name}
          </Link>
          <Typography color="textPrimary" className={classes.breadcrumbCurrent}>
            {FormState.division[0].title}
          </Typography>
        </Breadcrumbs>
        <GridItem xs={12}>
          <Paper className={classes.tab}>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tab}
            >
              <Tab label={`Pending (${pendingItems.length})`} className={classes.tabButton} />
              <Tab label={`Completed (${completedtems.length})`} className={classes.tabButton}  />
              <Tab label={`Rejected (${rejectedItems.length})`} className={classes.tabButton}  />
              <Tab label="Follow up" className={classes.tabButton}  />
            </Tabs>
            <TabPanel value={value} index={0} className={classes.tabPanel}>
              {pendingItems.length > 0 && pendingItems.map((item, index) =>
                <FormItem key={index} index={index} item={item} />
              )}
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabPanel}>
              {completedtems.length > 0 && completedtems.map((item, index) =>
                <FormItem key={index} index={index} item={item} />
              )}
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabPanel}>
              {rejectedItems.length > 0 && rejectedItems.map((item, index) =>
                <FormItem key={index} index={index} item={item} />
              )}
            </TabPanel>
          </Paper>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.section}>
        
      </GridContainer>
    </>
  );
}
 
export default Container;

