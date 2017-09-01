import {
  teal500,
  pink500,
  white,
  darkWhite,
  lightWhite,
  grey50,
  grey200,
  grey300,
  darkBlack,
  lightBlack,
  fullBlack,
  red500,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const theme = {
  primary1Color: teal500,
  primary2Color: pink500,
  primary3Color: grey200,
  accent1Color: darkWhite,
  accent2Color: lightWhite,
  accent33Color: grey200,
  textColor: darkBlack,
  secondaryTextColor: lightBlack,
  alternateTextColor: darkWhite,
  secondaryAlternateTextColor: lightWhite,
  canvasColor: white,
  borderColor: grey300,
  disabledColor: fade(darkBlack, 0.3),
  shadowColor: fullBlack,
  headerColor: grey200,
  backgroundColor: fade(grey50, 0.25),
  pickerHeaderColor: '#7AB998',
  errorColor: red500,
};

export const muiTheme = getMuiTheme({
  palette: theme,
  userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) || 'all',
});
