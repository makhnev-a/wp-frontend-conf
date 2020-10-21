import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';

import {MainPage} from "../../pages/Main/MainPage";

export const App = () => {
  const [auth] = useState(true);

  return (
    <Switch>
      <Route from='/' render={() => <MainPage auth={auth}/>}/>
      {/*<Route from='/sign_in' render={() => <SignIn auth={auth}/>}/>*/}
    </Switch>
  );
};