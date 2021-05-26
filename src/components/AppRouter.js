import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch,  } from 'react-router-dom';

const AppRouter = ({ routes }) => {


  return (
  <Switch>
    {routes.map((route, index) =>
      <Route
      key={index}
      path={route.path}
      component={route.component}
      exact={route.exact === undefined ? false : route.exact}
      />
    )}
  </Switch>
  );
};

AppRouter.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default AppRouter;
