import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import withRouteProps from 'hoc/withRouteProps/index';
import classNames from 'utils/classNames/index';
import l from 'utils/translate/index';
import { NAVIGATION_ROUTES } from 'routes';

import './index.scss';

const { string, shape } = PropTypes;

const getElemCoord = elem => elem && elem.getBoundingClientRect();

class Navigation extends PureComponent {
    static propTypes = {
        className: string,
        location: shape({
            pathname: string
        }).isRequired,
    }

    static defaultProps = {
        className: '',
    }

    constructor(props) {
        super(props);

        this.state = {
            menuItemStyle: {},
        };

        this._menuItems = {};
        this._nav = null;
    }

    componentDidMount() {
        this.updateMenuStyle();
    }

    componentDidUpdate(prevProps, prevState) {
        const { location } = this.props;

        if (prevProps.location.pathname !== location.pathname) {
            this.updateMenuStyle();
        }
    }

    /**
     * Calculates nav coordinates and selected menu item,
     * for updating underline styles
     */
    updateMenuStyle = () => {
        const { location } = this.props;

        const navCoord = getElemCoord(this._nav);
        const selectedItemCoord = getElemCoord(this._menuItems[location.pathname]);

        this.setState({
            menuItemStyle: {
                left: `${selectedItemCoord.left - navCoord.left + 10}px`,
                right: `${navCoord.right - selectedItemCoord.right + 10}px`,
            },
        })
    }

    render() {
        const { className } = this.props;
        const { menuItemStyle } = this.state;

        return (
            <nav className={classNames('nav', className)}>
                <ul
                    ref={(nav) => this._nav = nav}
                    className="flex nav__list"
                >
                    {NAVIGATION_ROUTES.map(({ title, path, exac }, index) => (
                        <li
                            ref={(item) => (
                                !Boolean(this._menuItems[path]) && (this._menuItems[path] = item)
                            )}
                            className="nav__list-item"
                            key={path}
                        >
                            <NavLink
                                to={path}
                                exac={exac}
                            >
                                {l(title)}
                            </NavLink>
                        </li>
                    ))}
                    <li
                        className="nav__underline"
                        style={menuItemStyle}
                    />
                </ul>
            </nav>
        );
    }
};

export default withRouteProps(Navigation);