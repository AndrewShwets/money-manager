import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import withRouteProps from 'hoc/withRouteProps';
import classNames from 'utils/classNames';
import l from 'utils/translate';
import { ORDERED_ROUTES } from 'routes';

import './index.scss';

const { string } = PropTypes;

class Nav extends PureComponent {
    static propTypes = {
        className: string,
    }

    static defaultProps = {
        className: '',
    }

    render() {
        const { className } = this.props;

        console.log(this.props);

        return (
            <nav className={classNames('nav', className)}>
                <ul className="flex nav__list">
                    {ORDERED_ROUTES.map(({ title, path, exac }, index) => (
                        <li className="nav__list-item" key={path}>
                            <NavLink
                                to={path}
                                exac={exac}
                            >
                                {l(title)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
};

export default withRouteProps(Nav);