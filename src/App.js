import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './containers/Main/Main'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Main/>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
