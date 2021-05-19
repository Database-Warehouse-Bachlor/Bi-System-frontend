// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import { Redirect, Route, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
      <Route
          {...rest}
          render={routeProps => localStorage.getItem("currentUser") != null ? (
                  <Component {...routeProps} />
              ) : (
                      <Redirect
                          to={{
                              pathname: '/',
                              state: { from: routeProps.location }
                          }}
                      />
                  )
          }
      />
  );
};

export default PrivateRoute;
