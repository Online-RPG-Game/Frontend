import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Game from './Game';
import Register from './onboarding/Register';
import Login from './onboarding/Login';
import Pregame from './onboarding/Pregame'

const App = () => {
  return (
    <Switch>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/game' component={Game} />
      <Route path='/pregame' component={Pregame} />
      <Redirect to='/register' />
    </Switch>
  );
};

export default App;
