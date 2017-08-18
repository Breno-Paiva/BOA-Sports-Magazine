import React from 'react';
import { Provider } from 'react-redux';
import Settings from './components/settings.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Settings store={store}/>
  </Provider>
);

export default Root;
