import React from 'react';
import { Route } from 'react-router-dom';

const withRouteProps = (ComposedComponent) => (props) => (
    <Route children={(...route) => <ComposedComponent {...Object.assign({}, route, props)} />} />
);

export default withRouteProps;