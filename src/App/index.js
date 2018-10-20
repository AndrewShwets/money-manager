import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation from 'components/Navigation';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default class App extends Component {

    render() {

        return (
            <Router>
                <Fragment>
                    <Navigation/>
                    <Content/>
                    <Footer/>
                </Fragment>
            </Router>
        )
    }
};