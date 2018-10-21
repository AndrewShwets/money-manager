import React from 'react';
import { Route } from 'react-router-dom';

import Container from 'components/Container';
import { CONTENT_ROUTES } from 'routes';

import './index.scss';

const Content = () => (
    <Container className="app__content">
        {Object.keys(CONTENT_ROUTES).map((key) => (
            <Route {...CONTENT_ROUTES[key]} key={key} />
        ))}
    </Container>
);

export default Content;