import React from 'react'
import PropTpyes from 'prop-types';
import classNames from 'utils/classNames';
import STATUSES from 'data/statuses';

import './index.scss';

const { string, oneOf, func, bool, node } = PropTpyes;

const propTypes = {
    onClick: func,
    className: string,
    children: node,
    bsStyle: oneOf(STATUSES),
    type: string,
    disabled: bool,
    active: bool,

};

const defaultProps = {
    onClick: null,
    className: '',
    children: null,
    bsStyle: 'primary',
    type: '',
    disabled: false,
    active: false,
};

const Button = ({
    className,
    type,
    disabled,
    active,
    onClick,
    children,
    bsStyle,
}) => (
    <button
        onClick={onClick}
        type={type}
        className={classNames(`btn btn_${bsStyle} ${active ? 'btn_active' : ''}`, className)}
        disabled={disabled}
    >
        {children}
    </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;