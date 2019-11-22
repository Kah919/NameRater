import React from 'react';
// BrowserRouter is called in the top most component so you can call methods 'Switch', 'Route', 'Link' in the render portion
import { Switch, Route } from 'react-router-dom'
import Form from './components/Form';
import TitleScreen from './components/TitleScreen'

function App() {

  return (
    // Switch matches the 'path' to the first URL param that comes up;
    // 'exact' is a key word, it requires  the path to match the URL exact; 
    // 'component' points the path to render the desired component;
    <Switch>
      <Route exact path='/' component={TitleScreen}/>
      <Route exact path='/search' component={Form}/>
    </Switch>
  );
}

export default App;
