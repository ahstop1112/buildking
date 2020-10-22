import React, { useState } from "react";
import { NavLink as RouterNavLink, withRouter } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../vendor/perfect-scrollbar.css";
import { spacing } from "@material-ui/system";
import { Collapse, Grid } from "@material-ui/core";
import { sidebarRoutes as routes } from "../routes/index";
import { Logo, Avatar, Category, CategoryText, CategoryIconMore, CategoryIconLess, Drawer,
  CategoryBadge, Link, LinkText, LinkBadge, Brand, Scrollbar, List, Items, 
  SidebarSection, SidebarUser, AvatarSubText, AvatarText
} from './SidebarStyles';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const SidebarCategory = ({
  name,
  icon,
  classes,
  isShown,
  isOpen,
  isCollapsable,
  badge,
  ...rest
}) => {
  return (
    <React.Fragment>
      {isShown ? <Category {...rest}>
        {icon}
        <CategoryText>{name}</CategoryText>
        {isCollapsable ? (
          isOpen ? (
            <CategoryIconMore />
          ) : (
            <CategoryIconLess />
          )
        ) : null}
        {badge ? <CategoryBadge label={badge} /> : ""}
      </Category> : null}
    </React.Fragment>
  );
}

const SidebarLink = ({ name, to, badge }) => {
  return (
    <Link
      button
      dense
      component={NavLink}
      exact
      to={to}
      activeClassName="active"
    >
      <LinkText>{name}</LinkText>
      {badge ? <LinkBadge label={badge} /> : ""}
    </Link>
  );
}

const Sidebar = ({ classes, staticContext, location, ...rest }) => {
  const initOpenRoutes = () => {
    /* Open collapse element that matches current url */
    const pathName = location.pathname;

    let _routes = {};

    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === "/" ? true : false;

      _routes = Object.assign({}, _routes, {[index]: isActive || isOpen || isHome})
    });

    return _routes;
  };

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes());

  const toggle = index => {
    // Collapse all elements
    Object.keys(openRoutes).forEach(
      item => openRoutes[index] || setOpenRoutes(openRoutes => Object.assign({}, openRoutes, {[item]: false}))
    )
    
    // Toggle selected element
    setOpenRoutes(openRoutes => Object.assign({}, openRoutes, {[index]: !openRoutes[index]}));
  }

  console.log(routes);

  return (
    <Drawer variant="permanent" {...rest}>
      <Brand>
        <Logo src="static/img/logo.png" />
      </Brand>
      <Scrollbar>
      <SidebarUser>
        <Grid container spacing={2}>
          <Grid container item lg={12} justify="center" alignItems="center" >
            <Avatar alt="Lucy Lavender" src="static/img/avatars/avatar-1.jpg" />
          </Grid>
          <Grid item lg={12}>
            <AvatarText variant="body2">
              Admin
            </AvatarText>
            <AvatarSubText variant="caption">
              Develop Admin
            </AvatarSubText>
          </Grid>
        </Grid>
        </SidebarUser>
        <List disablePadding>
          <Items>
            {routes.map((category, index) => (
              <React.Fragment key={index}>
                {category.header ? (
                  <SidebarSection>{category.header}</SidebarSection>
                ) : null}

                {category.children ? (
                  <React.Fragment key={index}>
                    <SidebarCategory
                      isOpen={!openRoutes[index]}
                      isCollapsable={true}
                      isShown={category.isShown}
                      name={category.id}
                      icon={category.icon}
                      button={true}
                      onClick={() => toggle(index)}
                    />

                    <Collapse
                      in={openRoutes[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      {category.children.map((route, index) => (
                        <SidebarLink
                          key={index}
                          name={route.name}
                          to={route.path}
                          icon={route.icon}
                          badge={route.badge}
                        />
                      ))}
                    </Collapse>
                  </React.Fragment>
                ) : (
                  <SidebarCategory
                    isCollapsable={false}
                    isShown={category.isShown}
                    name={category.id}
                    to={category.path}
                    activeClassName="active"
                    component={NavLink}
                    icon={category.icon}
                    exact
                    badge={category.badge}
                  />
                )}
              </React.Fragment>
            ))}
          </Items>
        </List>
      </Scrollbar>
      
    </Drawer>
  );
}

export default withRouter(Sidebar);
