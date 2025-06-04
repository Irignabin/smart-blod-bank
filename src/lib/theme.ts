import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#b91c1c',
    },
    secondary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0369a1',
    },
  },
  typography: {
    fontFamily: 'Inter var, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.5rem',
        },
      },
    },
  },
}); 