// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store'
import Form from './Form';
import Table from './Table';

function Redux() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Form Example</h1>
        <Form />
        <Table />
      </div>
    </Provider>
  );
}

export default Redux;
