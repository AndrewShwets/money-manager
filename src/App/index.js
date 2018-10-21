import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route>
                        <Fragment>
                            <Header/>
                            <Content/>
                            <Footer/>
                        </Fragment>
                    </Route>
                    <Route exact path="/login" component={() => <div>Login</div>} />
                    <Route component={() => <div>No match</div>} />
                </Switch>
            </Router>
        )
    }
};