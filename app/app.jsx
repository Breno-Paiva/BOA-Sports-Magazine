import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Settings from './components/settings';

document.addEventListener("DOMContentLoaded", ()=>{
  const preloadedState = { name: { first: 'Harry', last: 'Potter' },
                        address: { street: "123 Bowl Lane", city: "New York", state: "NY", zip: "10021" },
                           team: ["NY Knicks", "NY Giants"]
};
  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<Settings store={store} />, root);
});
