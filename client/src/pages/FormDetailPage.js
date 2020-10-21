import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/GridContainer";
import { getAllProject } from "services/Projects";
import UserContext from 'store/context/User';
import FormDetail from 'pages/FormDetail';

import styles from "assets/jss/pages/projectStyle";
const useStyles = makeStyles(styles);

const FormDetailPage = props => {
  const classes = useStyles();
  const user = useContext(UserContext);
  const userState = user.state;
  // const csrfToken = props.csrfToken;
  const csrfToken = 'uWknbRsKMQv8Lxb2rPuZI6gYbynJO4OeFMQuFfGL7OQaLeRDZ2wgZ844D05jmd9w';

  useEffect(() => {
    // if (csrfToken){
    //   console.log(csrfToken );
    //   getAllProject(
    //     csrfToken
    //   )
    //   .then(response => {
    //     console.log(response);
    //     // if (response.data.data){
    //     //   let userInfo = response.data.data;
    //     //   user.dispatch({type: 'INITIAL_USER_INFO', userInfo});
    //     // }
    //   })
    //   .catch(error => {
    //     // if (error.response) {
    //     //   setIsInvalid(true);
    //     //   setIsFetching(false);
    //     // }
    //   });
    // }
  }, []);

  return (
    <GridContainer className={classes.section}>
      <FormDetail />
    </GridContainer>
  );
}
 
export default FormDetailPage;