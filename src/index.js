import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import CartContextProvider from '../src/context/CartContext'
import LoadContextProvider from '../src/context/LoadingContext'

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
      <LoadContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </LoadContextProvider>
  </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
