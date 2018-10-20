import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Container from 'components/Markup/Container';
import ROUTES from 'routes';
import l from 'utils/translate';

import './index.scss';

const ORDERED_ROUTES = Object.values(ROUTES).sort((a, b) => a.order - b.order);

export default class Navigation extends Component {

    render() {
        return (
            <Container className="app__navigation">
                <nav>
                    <ul>
                        {ORDERED_ROUTES.map(({ title, path, exac }) => (
                            <li key={path}>
                                <NavLink to={path} exac={exac}>
                                    {l(title)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        )
    }
}