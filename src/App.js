import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Search from './pages/search/search';
import Position from './pages/position/position';
import Title from './components/title/title';


function App() {
  return (
    <div className="App">
      <Title/>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/position' component={Position} />
      </Switch>
    </div>
  );
}

export default App;