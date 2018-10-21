import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Header/>
                    <Content/>
                    <Footer/>
                </Fragment>
            </Router>
        )
    }
};