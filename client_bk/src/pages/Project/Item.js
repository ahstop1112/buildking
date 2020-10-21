import React, { useContext, useEffect } from "react";
import { Collapse, Grid } from "@material-ui/core";
// @material-ui/core
import AccessTime from "@material-ui/icons/AccessTime";
// core components
// import GridItem from "components/GridItem";
// import GridContainer from "components/GridContainer";
// import Table from "components/Table";
// import Tasks from "components/Tasks";
// import CustomTabs from "components/CustomTabs";
// import Danger from "components/Typography/Danger";
// import Card from "components/Card";
// import CardBody from "components/CardBody";
// import CardFooter from "components/CardFooter";
import { getAllProject } from "../../services/Projects";
import UserContext from '../../store/context/User';

const Item = props => {
  const project = props.project;
  const divisionLength = project.divisions.length;

  return ( 
    <Grid xs={12} sm={12} md={6}>
        asdfasdf
    </Grid>
  );
}
 
export default Item;

// <Card onClick={() => window.location.href=`/admin/project/${project.id}/divisions`}>
//         <CardBody>
//             <h4 >{project.name}</h4>
//             <p >{project.description}</p>
//         </CardBody>
//         <CardFooter chart>
//             <div >
//               {divisionLength} Division(s)
//             </div>
//         </CardFooter>
//         </Card>