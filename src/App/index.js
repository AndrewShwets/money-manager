import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import ROUTES, { CONTENT_ROUTES_PATHS } from 'routes';
import withRouteProps from 'hoc/withRouteProps';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

class App extends Component {

    render() {
        const { location } = this.props;

        // Doesn't render content when route without content property
        return (
            <Switch>
                {CONTENT_ROUTES_PATHS.includes(location.pathname) && (
                    <Fragment>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </Fragment>
                )}
                <Route {...ROUTES.login} />
                <Route {...ROUTES.noMatch} />
            </Switch>
        )
    }
};

export default withRouteProps(App);