import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //react toma este ID llamado 'root'que está en la carpeta pubic / index.html 
  //dentro de este div react restá incorporando lo que configuarmos, por ejemplo, nuestro H1
  document.getElementById('root')
);

