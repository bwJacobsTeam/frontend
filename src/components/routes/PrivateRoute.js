import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={() => {
            if (localStorage.getItem('token')) {
                return <Component {...rest} />
            } else {
                return <Redirect to='/' />
            }
        }}
    />
);

export default PrivateRoute;