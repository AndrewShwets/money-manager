import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import ROUTES, { CONTENT_ROUTES_PATHS } from 'routes';
import withRouteProps from 'hoc/withRouteProps';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container/index';

import './index.scss';

class App extends Component {

    checkRouteWithContent = () => {
        const { location } = this.props;

        return (
            CONTENT_ROUTES_PATHS.some((route) => {
                if(location.pathname === '/' && route === location.pathname) {
                    return true;
                } else if (location.pathname.indexOf(route)){
                    return true;
                }

                return false;
            })
        );
    }

    render() {
        console.log(this.props);

        // Doesn't render content when route without content property
        return (
            <Switch>
                {this.checkRouteWithContent() && (
                    <Fragment>
                        <Header/>
                        <Container className="app__content">
                            <Route {...ROUTES.categories} />
                            <Route {...ROUTES.categories.actions.add_category} />
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