import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';
import studioTheme from './ui-components/studioTheme';
import SettingsPage from './pages/SettingsPage';
import MyRoutes from './my-components/MyRoutes';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <MyRoutes/>
      <StrictMode>
        <ThemeProvider theme={studioTheme}>
          <SettingsPage />
        </ThemeProvider>
      </StrictMode>
  </BrowserRouter>
);
