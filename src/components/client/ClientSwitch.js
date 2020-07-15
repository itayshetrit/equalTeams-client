import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/index'
import Client from './Main'
import Add from './components/Add'


const ClientSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.Client.client} component={Client} ></Route>
        <Route path={Routes.Client.add} component={Add} ></Route>
        <Redirect from="/" to={Routes.Client.client} />
    </Switch>
  )
}

export default ClientSwitch;
