import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import CartContextProvider from '../src/context/CartContext'
import LoadContextProvider from '../src/context/LoadingContext'
import AuthContextProvider from '../src/context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
      <AuthContextProvider>
        <LoadContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </LoadContextProvider>
      </AuthContextProvider>
  </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
