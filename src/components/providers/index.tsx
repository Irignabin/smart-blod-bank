'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/lib/store';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/lib/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
} 