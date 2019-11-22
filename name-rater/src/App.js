import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Form from './components/Form';
import TitleScreen from './components/TitleScreen'

function App() {

  return (
    <Switch>
      <Route exact path='/' component={TitleScreen}/>
      <Route exact path='/search' component={Form}/>
    </Switch>
  );
}

export default App;
