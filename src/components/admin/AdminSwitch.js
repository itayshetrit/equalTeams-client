import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/index'
import Admin from './Main'
import Register from './components/Register'
import Actions from './components/Actions'



const AdminSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.Admin.admin} component={Admin}></Route>
        <Route path={Routes.Admin.register} component={Register}></Route>
        <Route path={Routes.Admin.actions} component={Actions}></Route>
        <Redirect from="/" to={Routes.Admin.admin} />
    </Switch>
  )
}

export default AdminSwitch;