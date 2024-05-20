import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/userContext';

import './global.css'

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrowserRouter basename={"/"}>
      <App />
    </BrowserRouter>
  </UserProvider>
);