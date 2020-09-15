import React, {useEffect} from 'react';
import { Switch, Route, Link} from "react-router-dom";
import IntroContainer from './containers/intro';
import ListContaier from './containers/list';
import DetailContainer from './containers/detail';
import {Provider, useDispatch} from 'react-redux';
import store  from './store';

function App() {

  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={IntroContainer} />
          <Route path='/list' component={ListContaier} />
          <Route path='/detail' component={DetailContainer} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
