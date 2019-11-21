import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Unauth from './Unauth'
import PrivateRoute from './PrivateRoute'
import RegistrationPage from './RegistrationPage'
import firebase from './fbAuthUtils'

const AppRouter = () => {
  firebase.checkAuthedUser()
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={Unauth} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
