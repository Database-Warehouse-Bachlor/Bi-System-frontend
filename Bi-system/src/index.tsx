import { brown } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  
  <React.StrictMode>
    <div style={{background: brown[100]}}>
    <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

