import React from 'react';
import { Route } from 'react-router-dom';

const withRouteProps = (ComposedComponent) => (props) => (
    <Route children={(...props) => <ComposedComponent {...props} />} />
);

export default withRouteProps;