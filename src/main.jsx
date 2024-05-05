import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { RegisterProvider } from './providers/RegisterContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <App />
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
