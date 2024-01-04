import { colors } from '@mui/material';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    light: '#000000',// 'F1E4FF',
    main: '#000000',
    dark: '#000000'
  },
  secondary: {
    contrastText: "#1F8B24",
    hoverColor: white,
    dark: "#9aed9c",
    main: "#C5F2C7",
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[800],
    secondary: colors.blueGrey[900],
    link: colors.blue[600],

  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#ffffff',
    paper: white
  },
  divider: colors.grey[200]

};
