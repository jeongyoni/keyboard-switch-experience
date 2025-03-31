import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './features/home/Home';
import KeyboardExperience from './features/keyboardExperience/KeyboardExperience';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/keyboard-experience" component={KeyboardExperience} />
      </Switch>
    </Router>
  );
}

export default App;
