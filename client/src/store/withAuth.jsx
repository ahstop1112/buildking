import React, { useContext, useEffect } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from './context/User';

const withAuth = WrappedComponent => props => {
  const history = useHistory();
  const location = useLocation();
  const { publicId } = queryString.parse(location.public_id);
  const user = useContext(UserContext);
  const userState = user.state;

  useEffect(() => {
    const hasToken = userState.csrfToken && userState.loginFields.email.value ? true : false;
    const atRoot = location.pathname === '/';
    const atLogin = location.pathname === '/login';
    const atDashboard = location.pathname === '/admin/projects';
    const routesNoAuth = atRoot || atLogin;

    console.log(userState);

    if (!hasToken && !routesNoAuth) {
  
      // console.log(history);
      history.replace('/login');
      // console.log(history);
    } else if (hasToken && (routesNoAuth)) {
      history.replace('/admin/projects');
    }

  }, [
    history,
    location.pathname,
    publicId,
    user.idToken
  ]);

  return <WrappedComponent {...props} />;
};

export default withAuth;
