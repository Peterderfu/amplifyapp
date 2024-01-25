import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';
import studioTheme from './ui-components/studioTheme';
import SettingsPage from './pages/SettingsPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={studioTheme}>
      <SettingsPage />
    </ThemeProvider>
  </StrictMode>
);
