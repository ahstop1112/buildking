import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from '@material-ui/core';
import { Typography, Breadcrumbs } from './Styles';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const BreadcrumbLv1 = props => {
  const { lv1, lv1Link } = props;

  return ( 
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/web/admin/project">
          Admin
        </Link>
        {/* Level 1*/}
        <Typography>{lv1}</Typography>
      </Breadcrumbs>
  );
}
 
export default BreadcrumbLv1;

