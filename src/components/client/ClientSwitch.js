import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/index'
import Client from './Main'


const ClientSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.Client.clients} component={Client} ></Route>
        <Redirect from="/" to={Routes.Client.clients} />
    </Switch>
  )
}

export default ClientSwitch;
