import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, // caso erro provider dentro do browser router
);

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
