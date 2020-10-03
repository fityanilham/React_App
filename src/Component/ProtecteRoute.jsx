import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ childern, ...rest }) => {
  const [auth, setAuth] = React.useState(false);
  return (
    <div>
      <Route {...rest}>{auth ? childern : <Redirect to="/login"/>}</Route>
    </div>
  )
}

export default ProtectedRoute;
