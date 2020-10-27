import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';

import {MainPage} from "../../pages/Main/MainPage";
import {SignInPage} from "../../pages/SignIn/SignInPage";

export const App = () => {
  const [auth] = useState(true);

  return (
    <Switch>
      <Route exact from='/' render={() => <MainPage auth={auth}/>}/>
      <Route from='/sign_in' render={() => <SignInPage auth={auth}/>}/>
    </Switch>
  );
};