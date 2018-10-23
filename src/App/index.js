import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import ROUTES, { CONTENT_ROUTES_PATHS } from 'routes';
import withRouteProps from 'hoc/withRouteProps';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container/index';

import './index.scss';

class App extends Component {
    render() {
        const { location: { pathname } } = this.props;

        // Doesn't render content when route without content property
        return (
            <Switch>
                {CONTENT_ROUTES_PATHS.includes(pathname) && (
                    <Fragment>
                        <Header/>
                        <Container className="app__content">
                            <Route {...ROUTES.categories} />
                            <Route {...ROUTES.categories.subRoute.add_category} />
                            <Route {...ROUTES.expenses_add} />
                            <Route {...ROUTES.expenses_summary} />
                        </Container>
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