import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...rest}:any) =>{


    return(
        <Route {...rest} render={(props: any) => 
            localStorage.getItem('') ?
                  <Component {...props} />
                  : <Redirect to="/signin" />
          } />
    )
}