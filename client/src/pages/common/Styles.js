import styled from "styled-components";
import { spacing } from "@material-ui/system";

import {
  Grid,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Paper as MuiPaper,
  Button as MuiButton
} from "@material-ui/core";
import { AvatarGroup as MuiAvatarGroup } from '@material-ui/lab';
export const Button = styled(MuiButton)(spacing);

export const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

export const Card = styled(MuiCard)`
  width: 100%;
`;

export const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${props => props.theme.palette.grey[300]};
`;

export const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

export const Divider = styled(MuiDivider)(spacing);

export const Typography = styled(MuiTypography)(spacing);

export const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${props => props.rgbcolor};
  color: ${props => props.theme.palette.common.white};
  margin-bottom: ${props => props.theme.spacing(4)}px;
`;

export const AvatarGroup = styled(MuiAvatarGroup)`
  margin-left: ${props => props.theme.spacing(2)}px;
`

// const CardContent = styled(MuiCardContent)(spacing);


export const Paper = styled(MuiPaper)`
  width: 100%;
`;

export const AddButtonContainer = styled(Grid)`
  padding-left: 10px;
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  margin: 0;
`;