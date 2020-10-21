import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';

const withToken = WrappedComponent => props => {
  const location = useLocation();
  const { token } = queryString.parse(location.search);

  return token ? <WrappedComponent {...props} /> : <NotFoundPage />;
};

export default withToken;
