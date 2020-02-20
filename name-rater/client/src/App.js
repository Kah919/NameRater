import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Form from './components/Form';
import Intro from './containers/Intro'
import Result from './components/Result'
import 'bootstrap/dist/css/bootstrap.min.css';
import audio from './audio/audio.mp3';
import GenderForm from './components/GenderForm';
import NameForm from './components/NameForm'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    femaleNames: [],
    maleNames: []
  }

  audio = new Audio(audio);
  
  render() {
    this.audio.volume = 0.3
    {this.audio.play()}
    return (
      // Switch matches the 'path' to the first URL param that comes up;
      // 'exact' is a key word, it requires  the path to match the URL exact; 
      // 'component' points the path to render the desired component;
      <Switch>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/intro' componnet={Intro}/>
        <Route exact path='/select' component={GenderForm}/>
        <Route exact path='/input' component={NameForm}/>
        <Route exact path='/search' component={Form}/>
        <Route exact path='/results' component={Result}/>
      </Switch>
    );
  }
}

export default App;
