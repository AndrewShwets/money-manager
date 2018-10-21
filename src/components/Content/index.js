import React from 'react';
import { Route } from 'react-router-dom';

import Container from 'components/Container';
import ROUTES from 'routes';

import './index.scss';

const Content = () => (
    <Container className="app__content">
        {Object.keys(ROUTES).map((key) => (
            <Route {...ROUTES[key]} key={key} />
        ))}
    </Container>
);

export default Content;