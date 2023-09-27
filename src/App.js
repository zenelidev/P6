import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import './sass/css/main.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;