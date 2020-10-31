import styled from "styled-components";
import { rgba , darken } from "polished";

import PerfectScrollbar from "react-perfect-scrollbar";
import "../vendor/perfect-scrollbar.css";

import { spacing } from "@material-ui/system";

import {
  Avatar as MuiAvatar,
  Badge,
  Box as MuiBox,
  Chip,
  Drawer as MuiDrawer,
  List as MuiList,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { Layers } from "react-feather";

export const Box = styled(MuiBox)(spacing);

export const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

export const Scrollbar = styled(PerfectScrollbar)`
  background-color: ${props => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

export const List = styled(MuiList)`
  background-color: ${props => props.theme.sidebar.background};
`;

export const Items = styled.div`
  padding-top: ${props => props.theme.spacing(2.5)}px;
  padding-bottom: ${props => props.theme.spacing(2.5)}px;
`;

export const Brand = styled(ListItem)`
  font-size: ${props => props.theme.typography.h5.fontSize};
  font-weight: ${props => props.theme.typography.fontWeightMedium};
  color: ${props => props.theme.sidebar.header.color};
  background-color: ${props => props.theme.sidebar.header.background};
  font-family: ${props => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${props => props.theme.spacing(6)}px;
  padding-right: ${props => props.theme.spacing(6)}px;
  cursor: default;

  ${props => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: ${props => props.theme.sidebar.header.background};
  }
`;

export const BrandIcon = styled(Layers)`
  margin-right: ${props => props.theme.spacing(2)}px;
  color: ${props => props.theme.sidebar.header.brand.color};
`;

export const BrandChip = styled(Chip)`
  background-color: ${green[700]};
  border-radius: 5px;
  color: ${props => props.theme.palette.common.white};
  font-size: 60%;
  height: 20px;
  margin-left: 2px;
  margin-bottom: 1px;
  padding: 4px 0;

  span {
    padding-left: ${props => props.theme.spacing(1.5)}px;
    padding-right: ${props => props.theme.spacing(1.5)}px;
  }
`;

export const Category = styled(ListItem)`
  padding-top: ${props => props.theme.spacing(3)}px;
  padding-bottom: ${props => props.theme.spacing(3)}px;
  padding-left: ${props => props.theme.spacing(6)}px;
  padding-right: ${props => props.theme.spacing(5)}px;
  font-weight: ${props => props.theme.typography.fontWeightRegular};

  svg {
    color: ${props => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &.${props => props.activeClassName} {
    background-color: ${props => darken(0.05, props.theme.sidebar.background)};

    span {
      color: ${props => props.theme.sidebar.color};
    }
  }
`;

export const CategoryText = styled(ListItemText)`
  margin: 0;
  span {
    color: ${props => props.theme.sidebar.color};
    font-size: ${props => props.theme.typography.body1.fontSize}px;
    font-weight: ${props => props.theme.sidebar.category.fontWeight};
    padding: 0 ${props => props.theme.spacing(4)}px;
  }
`;

export const CategoryIconLess = styled(ExpandLess)`
  color: ${props => rgba(props.theme.sidebar.color, 0.5)};
`;

export const CategoryIconMore = styled(ExpandMore)`
  color: ${props => rgba(props.theme.sidebar.color, 0.5)};
`;

export const Link = styled(ListItem)`
  padding-left: ${props => props.theme.spacing(15)}px;
  padding-top: ${props => props.theme.spacing(2)}px;
  padding-bottom: ${props => props.theme.spacing(2)}px;

  span {
    color: ${props => rgba(props.theme.sidebar.color, 0.7)};
  }

  &:hover span {
    color: ${props => rgba(props.theme.sidebar.color, 0.9)};
  }

  &.${props => props.activeClassName} {
    background-color: ${props => darken(0.06, props.theme.sidebar.background)};

    span {
      color: ${props => props.theme.sidebar.color};
    }
  }
`;

export const LinkText = styled(ListItemText)`
  color: ${props => props.theme.sidebar.color};
  span {
    font-size: ${props => props.theme.typography.body1.fontSize}px;
  }
  margin-top: 0;
  margin-bottom: 0;
`;

export const LinkBadge = styled(Chip)`
  font-size: 0.86em;
  font-weight: ${props => props.theme.typography.fontWeightBold};
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: ${props => props.theme.sidebar.badge.background};

  span.MuiChip-label,
  span.MuiChip-label:hover {
    cursor: pointer;
    color: ${props => props.theme.sidebar.badge.color};
    padding-left: ${props => props.theme.spacing(2)}px;
    padding-right: ${props => props.theme.spacing(2)}px;
  }
`;

export const CategoryBadge = styled(LinkBadge)`
  top: 12px;
`;

export const SidebarSection = styled(Typography)`
  color: ${props => props.theme.sidebar.color};
  padding: ${props => props.theme.spacing(4)}px
    ${props => props.theme.spacing(6)}px ${props => props.theme.spacing(1)}px;
  opacity: 0.9;
  display: block;
`;

export const SidebarUser = styled.div`
  background-color: ${props =>
    props.theme.sidebar.footer.background} !important;
  padding: ${props => props.theme.spacing(2.75)}px
    ${props => props.theme.spacing(4)}px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

export const AvatarText = styled(Typography)`
  color: ${props => props.theme.sidebar.footer.color};
  font-size: 1.2em;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;

export const AvatarSubText = styled(Typography)`
  color: ${props => props.theme.sidebar.badge.background};
  font-size: 1rem;
  display: block;
  padding: 1px;
  width: 100%;
  text-align: center;
`;

export const Avatar = styled(MuiAvatar)`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

export const StyledBadge = styled(Badge)`
  margin-right: ${props => props.theme.spacing(1)}px;

  span {
    background-color: ${props => props.theme.sidebar.footer.online.background};
    border: 1.5px solid ${props => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

export const Logo = styled.img`
  max-width: 90%;
  margin: 0 auto;
`;