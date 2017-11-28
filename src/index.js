import React from 'react';
import { render } from 'react-dom';
import App from './register/app';
import registerServiceWorker from './register/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,rootElement);
}
registerServiceWorker();