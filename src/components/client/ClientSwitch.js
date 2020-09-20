import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/index'
import Client from './Main'
import List from './components/List'
import Tables from './components/Tables'


const ClientSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.Client.clients} component={Client} ></Route>
        <Route path={Routes.Client.list} component={List} ></Route>
        <Route path={Routes.Client.tables} component={Tables} ></Route>
        <Redirect from="/" to={Routes.Client.clients} />
    </Switch>
  )
}

export default ClientSwitch;
