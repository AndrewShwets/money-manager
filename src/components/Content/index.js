import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from 'components/Container';
import ROUTES from 'routes';

import './index.scss';

const Content = () => (
    <Container className="app__content">
        <Switch>
            {Object.keys(ROUTES).map((key) => (
                <Route {...ROUTES[key]} key={key} />
            ))}
        </Switch>
    </Container>
);

export default Content;