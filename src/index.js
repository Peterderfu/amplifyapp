import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';
import { Amplify } from 'aws-amplify';
import App from './App';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode >
);
