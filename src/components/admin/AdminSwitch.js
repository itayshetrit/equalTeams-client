import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/index'
import Admin from './Main'
import AddUser from './components/AddUser'
import Actions from './components/GetUsers'



const AdminSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.Admin.admin} component={Admin}></Route>
        <Route path={Routes.Admin.add_user} component={AddUser}></Route>
        <Route path={Routes.Admin.get_users} component={Actions}></Route>
        <Redirect from="/" to={Routes.Admin.admin} />
    </Switch>
  )
}

export default AdminSwitch;