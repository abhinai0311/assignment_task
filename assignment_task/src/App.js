import React from 'react';
import './App.css';
import Product from './components/Product';
import Welcome from './components/Welcome';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
    </Router>
      </div>
    </div>
  );
}

export default App;
