import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from "firebase";

const ProtectedRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={
      props => {
        if (firebase.auth().currentUser) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
          pathname: '/unauthorized',
          state: {
          from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;
  