import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Game from './Game';
import Register from './onboarding/Register';
import Login from './onboarding/Login';
import Pregame from './onboarding/Pregame'
import Creators from './onboarding/Creators'
import Storyline from './onboarding/Storyline'

const App = () => {
  return (
    <Switch>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/game' component={Game} />
      <Route path='/pregame' component={Pregame} />
      <Route path='/storyline' component={Storyline} />
      <Route path='/creators' component={Creators} />
      <Redirect to='/login' />
    </Switch>
  );
};

export default App;
