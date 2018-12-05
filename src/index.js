import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

import Form from './components/Form/Form';

const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));