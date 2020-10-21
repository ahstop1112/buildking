import React, { useContext, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButton";
import GridItem from "components/GridItem";
import GridContainer from "components/GridContainer";
import Table from "components/Table";
import Tasks from "components/Tasks";
import CustomTabs from "components/CustomTabs";
import Danger from "components/Typography/Danger";
import Card from "components/Card";
import CardHeader from "components/CardHeader";
import CardIcon from "components/CardIcon";
import CardBody from "components/CardBody";

import styles from "assets/jss/pages/projectStyle";

const useStyles = makeStyles(styles);

const Item = props => {
  const classes = useStyles();
  const item = props.item;
  console.log(item);

  return (
    <GridContainer xs={12} sm={12} md={12}>
      <Card  className={classes.divisionItem}>
        <CardBody className={classes.cardBody}>
          <GridContainer xs={12} sm={12} md={12} alignItems="center">
            <GridItem md={1}>
              {props.index+1}
            </GridItem>
            <GridItem md={9}>
              <h5 className={classes.itemTitle}>{item.no}</h5>
            </GridItem>
            <GridItem md={2} justify="flex-end">
            <Button
                onClick={() => window.location.href=`https://cerebro.servehttp.com/formlist/html/genReport.php?form_id=${item.id}`}
                target="_blank"
                fullWidth
              >
                Preview
              </Button>
              <Button
                onClick={() => window.location.href=`/admin/form/${item.id}`}
                target="_blank"
                fullWidth
              >
                Edit
              </Button>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
        
    </GridContainer>
  );
}
 
export default Item;
//onClick={() => window.location.href=`/admin/project/${project.id}`}
// <CardBody>
//             
//             <p className={classes.cardCategory}>{project.description}</p>
//         </CardBody>
//         <CardFooter chart>
//             <div className={classes.stats}>
//             <AccessTime /> campaign sent 2 days ago
//             </div>
//         </CardFooter>


// {item.tasks.map((task, index) => 
//   <Card className={classes.task}>
//     <CardBody className={classes.taskBody}>
//       <span>{task.role}</span>
//       <span>{task.id}</span>
//       <span>{task.date}</span>
//     </CardBody>  
//   </Card>
// )}