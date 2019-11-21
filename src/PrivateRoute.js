import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.user ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/unauth'} />
        )}
    />
  )
}
export default PrivateRoute
