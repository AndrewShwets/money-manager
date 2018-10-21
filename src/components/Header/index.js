import React, { Component } from 'react';

import Container from 'components/Container';
import Navigation from 'components/Navigation';

import './index.scss';

export default class Header extends Component {

    render() {
        return (
            <Container
                className="app__header"
                containerClassName="flex"
            >
                <Navigation className="pull_right"/>
            </Container>
        )
    }
};