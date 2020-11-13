import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/index'
import Admin from './Main'
import AddUser from './components/AddUser'
import GetUsers from './components/GetUsers'
import Elections from './components/Elections'
import TeamPage from './components/TeamPage'



const AdminSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.Admin.admin} component={Admin}></Route>
        <Route path={Routes.Admin.add_user} component={AddUser}></Route>
        <Route path={Routes.Admin.get_users} component={GetUsers}></Route>
        <Route path={Routes.Admin.elections} component={Elections}></Route>
        <Route path={Routes.Admin.team_page} component={TeamPage}></Route>
        <Redirect from="/" to={Routes.Admin.admin} />
    </Switch>
  )
}

export default AdminSwitch;