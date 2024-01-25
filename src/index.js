import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';
// import { theme } from './theme';
import studioTheme from './ui-components/studioTheme';
import Example from './Example';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={studioTheme}>
      <Example />
    </ThemeProvider>
  </StrictMode>
);
