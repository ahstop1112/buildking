import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from '@material-ui/core';
import { Typography, Breadcrumbs } from './Styles';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const BreadcrumbLv3 = props => {
  const { lv1, lv1Link, lv2, lv2Link, lv3, lv3Link } = props;

  return ( 
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/web/admin/project">
          Admin
        </Link>
        <Link component={NavLink} to={`/web/admin/${lv1Link}`}>
          {lv1}
        </Link>
        <Link component={NavLink} to={`/web/admin/${lv2Link}`}>
          {lv2}
        </Link>
        <Typography>{lv3}</Typography>
      </Breadcrumbs>
  );
}
 
export default BreadcrumbLv3;

