import React from 'react';
import {Switch, Route} from "react-router-dom";
import IntroContainer from './containers/intro';
import ListContaier from './containers/list';
import DetailContainer from './containers/detail';
import {Provider} from 'react-redux';
import store, {persistor}  from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route exact path='/' component={IntroContainer} />
            <Route path='/list' component={ListContaier} />
            <Route path='/detail/:id' component={DetailContainer} />
          </Switch>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
