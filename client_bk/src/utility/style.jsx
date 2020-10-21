/* eslint-disable no-unused-vars */
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Override Default Material-UI Theme
// https://material-ui.com/customization/themes/

// Material-UI Default Theme
// https://material-ui.com/customization/default-theme/

// Colours - Brand
// building colours taken from Design System
// https://zpl.io/beWXOjB

const building = {
  primary: {
    orange: '#FF8400',
    cyan: '#00B3E3',
    accent: '#007297',
  },
  secondary: {
    darkBlue: '#00607A',
    lightBlue: '#008DB3',
    green: '#3E8604',
    red: '#D0021B',
    darkOrange: '#E15F00',
    lightOrange: '#FF862E',
    yellow: '#E2B400',
  },
};

const backgroundBlack = '#111111';
const backgroundGrey = '#F7F7F7';
const backgroundDarkGrey = '#F1F1F1';

const brandBlue = '#00B3E3';
const brandOrange = '#FF8200';

const secondaryGrey = '#CDCDCD';
const secondaryDarkGrey = '#767676';
const secondaryMediumGrey = '#999999';
const secondaryTurquoise = '#0080A3';

const tertiaryDarkTurquoise = '#007290';
const tertiaryMediumTurquoise = '#008DB3';

const theme = createMuiTheme({
  overrides: {
    MuiLink: {
      root: {
        color: secondaryTurquoise,
      },
    },
  },
  palette: {
    background: {
      black: backgroundBlack,
      blue1: '#E5F9FF',
      blue2: '#F7FDFF',
      blueLine1: '#E1F9FF',
      darkGrey: backgroundDarkGrey,
      default: '#FFFFFF',
      grey: backgroundGrey,
    },
    base: {
      white: '#FFFFFF',
      black: {
        1: '#000000',
        2: '#231F20',
        3: '#555555',
      },
      grey: {
        1: '#767676',
        2: '#9B9B9B',
        3: '#C0C0C0',
        4: '#D1D4D3',
      },
    },
    brand: {
      blue: brandBlue,
      orange: brandOrange,
    },
    common: {
      black: '#333333',
    },
    confirm: {
      main: building.secondary.green,
    },
    error: {
      main: building.secondary.red,
    },
    grey: {
      active: '#EBEBEB',
      dark: secondaryDarkGrey,
      line: '#929292',
      main: secondaryGrey,
      medium: secondaryMediumGrey,
    },
    primary: {
      ...building.primary,
      // TODO: Research if 'light' is needed
      light: '#EEFBFF',
      main: brandBlue,
    },
    secondary: {
      ...building.secondary,
      main: brandOrange,
      // TODO: Deprecate turquoise for light-blue
      turquoise: secondaryTurquoise,
    },
    text: {
      primary: '#231F20',
    },
    tertiary: {
      turquoise: {
        dark: tertiaryDarkTurquoise,
        medium: tertiaryMediumTurquoise,
      },
    },
    warning: {
      light: '#FFFEF9',
      main: building.secondary.yellow,
    },
  },
  typography: {
    fontFamily: [
      'New Hero',
      'Noto Sans HK',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
    body1: {
      lineHeight: 1.43,
    },
  },
});

// Ref: https://material-ui.com/customization/breakpoints/

export const mediaQueryMobile = theme.breakpoints.between('xs', 'sm');
export const mediaQueryTablet = theme.breakpoints.between('sm', 'md');
export const mediaQueryDesktop = theme.breakpoints.up('md');

export default responsiveFontSizes(theme);
