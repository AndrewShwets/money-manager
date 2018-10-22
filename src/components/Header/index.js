import React from 'react';

import Container from 'components/Container';
import Navigation from './components/Navigation';

import './index.scss';

const Header = () => (
    <Container
        className="app__header"
        containerClassName="flex"
    >
        <Navigation className="pull_right"/>
    </Container>
);

export default Header;