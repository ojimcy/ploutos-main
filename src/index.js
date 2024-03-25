import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import './index.css';
import '../src/assets/css/animate.min.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProvider } from './context';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);
