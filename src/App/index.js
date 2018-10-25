import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import ROUTES, { CONTENT_ROUTES_PATHS } from 'routes';
import withRouteProps from 'hoc/withRouteProps';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container/index';

import './index.scss';

class App extends Component {

    /**
     * Checks whether to render content or not
     * @param pathname
     * @returns {boolean}
     */
    validateRoute = (pathname) => {
        if (pathname === '/') return true;

        let isValid = false;

        // @Todo AndrewShwets Bad design
        if (pathname === ROUTES.login.path) return false;

        CONTENT_ROUTES_PATHS.forEach((path) => {
            if (pathname.includes(path)) {
                isValid = true;
            }
        });

        return isValid;
    }

    render() {
        const { location: { pathname } } = this.props;
        // Doesn't render content when route without content property
        return (
            <Switch>
                {this.validateRoute(pathname) && (
                    <Fragment>
                        <Header/>
                        <Container className="app__content" flex={false}>
                            <Route {...ROUTES.home_page} />
                            <Route {...ROUTES.expenses} />
                            <Route {...ROUTES.expenses.subRoute.edit_expense} />
                            <Route {...ROUTES.categories} />
                            <Route {...ROUTES.categories.subRoute.add_category} />
                            <Route {...ROUTES.categories.subRoute.edit_category} />
                            <Route {...ROUTES.expenses_add} />
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