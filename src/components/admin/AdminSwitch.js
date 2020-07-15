import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/index'
import Admin from './Main'



const AdminSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.Admin.admin} component={Admin}></Route>
        <Redirect from="/" to={Routes.Admin.admin} />
    </Switch>
  )
}

export default AdminSwitch;