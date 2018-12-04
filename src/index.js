import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

import Home from './components/Home/home';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));