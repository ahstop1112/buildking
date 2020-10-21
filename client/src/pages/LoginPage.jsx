import React, { useContext, useEffect } from "react";
import { useTranslation } from 'react-i18next';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/GridItem";
import GridContainer from "components/GridContainer";
import TextFieldCustomError from "components/TextFieldCustomError";
import Button from "components/CustomButton";
import Card from "components/Card";
import CardHeader from "components/CardHeader";
import CardBody from "components/CardBody";
import CardFooter from "components/CardFooter";
import UserContext from 'store/context/User';
import { signIn }  from 'services/User';
import { primaryColor, whiteColor } from "assets/jss/root";

const styles = {
  cardHeader: {
    backgroundColor: primaryColor[4]
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.9)",
    margin: "0",
    fontSize: "1.25em",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: whiteColor,
    fontSize: "1.75rem",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  btn: {
    backgroundColor: primaryColor[4]
  }
};

const useStyles = makeStyles(styles);

const LoginPage = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const user = useContext(UserContext);
  const userState = user.state;

  const handleTextField = fieldName => event => {
    // console.log(fieldName);
    console.log(event.target.value);
    console.log(user.state);

    user.dispatch({
      type: 'LOGIN_FIELD_CHECK',
      fieldName: fieldName,
      value: event.target.value
    })
  }

  const onSignIn = () => {
    if (userState['loginFields']['email']['isValid'] && 
        userState['loginFields']['email']['isValid']
    ){
      signIn(
        userState['loginFields']['email']['value'],
        userState['loginFields']['password']['value'],
        props.csrfToken
      )
      .then(response => {
        if (response.data.data){
          let userInfo = response.data.data;
          user.dispatch({type: 'INITIAL_USER_INFO', userInfo});
          window.location.href = "/admin/projects";
        }
      })
      .catch(error => {
        // if (error.response) {
        //   setIsInvalid(true);
        //   setIsFetching(false);
        // }
      });
    }
  }

  return ( 
    <>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader className={classes.cardHeader}>
          <h4 className={classes.cardTitleWhite}>{t('common.login')}</h4>
          <p className={classes.cardCategoryWhite}>Please login your account</p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            {Object.keys(userState['loginFields']).map(loginKey => 
              <GridItem xs={12} sm={12} md={12} key={loginKey}>
                <TextFieldCustomError
                  label={t(`common.${loginKey}`)}
                  type={userState['loginFields'][loginKey]['type']}
                  value={userState['loginFields'][loginKey]['value']}
                  id={loginKey}
                  formcontrolprops={{
                    fullWidth: true
                  }}
                  errorHelperText="error"
                  onChange={handleTextField(loginKey)}
                  margin="none"
                />
              </GridItem>)
            }
          </GridContainer>
        </CardBody>
        <CardFooter>
          <Button className={classes.btn} color="primary" onClick={onSignIn}>{t(`common.login`)}</Button>
        </CardFooter>
      </Card>
      </GridItem>
    </GridContainer>
  </>
  );
}

export default LoginPage;
