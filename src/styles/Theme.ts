/*
* MUI
*/
import { createTheme } from '@mui/material'

const theme = createTheme({
  // Define system colors
  palette: {
    primary: {
      dark: '#27548A',
      main: '#3674B5',
      // medium: '#578FCA',
      light: '#578FCA',
    },
    secondary: {
      dark: '#737682',
      main: '#808390',
      light: '#999CA6',
    },
    warning: {
      main: '#FF9D23',
      light: '#FFBF61',
    },
    error: {
      main: '#E55050',
      light: '#FF8080',
    },
    success: {
      main: '#519259',
      light: '#A7D397',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#34495E',
    },
  },

  // Define typography styles
  typography: (palette) => ({
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.5,
    h1: {
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: 0.3,
      color: palette.text.primary,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      color: palette.text.primary,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      color: palette.text.primary,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      color: palette.text.primary,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      color: palette.text.primary,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 12,
      color: palette.text.secondary,
      lineHeight: 1.5,
    },
  }),
  
  // Define spacing unit
  spacing: 4, // 1 unit = 4px

  // Define shape styles
  // These shapes are used for components like buttons, cards, etc.
  shape: {
    borderRadius: 16,
  },

  // Define z-index values
  // These z-index values are used to control the stacking order of components
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },

  // Define component styles
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2rem',
          paddingBottom: '2rem',
          backgroundColor: 'white',
        },
      },
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
})

export default theme
