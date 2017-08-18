import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Settings from './components/settings';

document.addEventListener("DOMContentLoaded", ()=>{
  const preloadedState = { name: { first: 'Harry', last: 'Potter' } };
  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<Settings store={store} />, root);
});
