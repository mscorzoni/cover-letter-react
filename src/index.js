import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

import Home from './components/Home/home';
import Form from './components/Form/Form';

const App = () => {
  return (
    <div>
      <Home />
      <Form/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));