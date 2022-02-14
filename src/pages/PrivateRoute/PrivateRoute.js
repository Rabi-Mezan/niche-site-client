import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth()



    if (isLoading) {
        return <div class="flex justify-center items-center">
            <div
                class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
            ></div>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;