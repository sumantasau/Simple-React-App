import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'React with Webpack and Babel';
const rootElement = document.getElementById("app");
 
ReactDOM.render(
  <div>{title}</div>,
  rootElement
);
/*if (typeof window !== 'undefined') {
    ReactDOM.render( <div>{title}</div>,document.getElementById("app"));
}*/