import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArrowComponent from './components/layout/arrowComponent';
import ComponentNoFuncional from './components/layout/classComponent';


const App = () => {
  return (
    <div className="App">
      <ArrowComponent logo={logo}/>
      <ComponentNoFuncional logo={logo} />
    </div>
  );
}

export default App;
