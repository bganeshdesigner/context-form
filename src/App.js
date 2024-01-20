// App.js
import React from 'react';
import CONTEXTAPI from './contextapi/contextapi'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAndTable from './components/State';
import { Outlet, Link } from "react-router-dom";
import Navigation from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormWithEditableTable from './components/State'
import Redux from './redux/Redux'

import { Routes,} from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div>

      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<FormAndTable />} />
          {/* <Route path="/context" element={<CONTEXTAPI />} /> */}
          {/* <Route path="/redux" element={<Redux />} /> */}
        </Routes>
        <Outlet />
      </Router>
 </div>
  );
};

export default App;
