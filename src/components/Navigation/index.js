import React, { Component } from 'react';

import Container from 'components/Markup/Container';
import Nav from 'components/Markup/Nav';

import './index.scss';

export default class Navigation extends Component {

    render() {
        return (
            <Container
                className="app__navigation"
                containerClassName="flex"
            >
                <Nav className="pull_right"/>
            </Container>
        )
    }
};