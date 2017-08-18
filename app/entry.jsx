import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './root';

document.addEventListener("DOMContentLoaded", ()=>{
  const preloadedState = { name: { first: 'Harry', last: 'Potter' },
                        address: { street: "123 Bowl Lane", city: "New York", state: "NY", zip: "10021" },
                           team: ["NY Knicks", "NY Giants"]
};
  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
