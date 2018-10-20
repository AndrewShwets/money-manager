import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/classNames';

import './index.scss';

const { node, string } = PropTypes;

const propTypes = {
    children: node.isRequired,
    className: string,
};

const defaultProps = {
    className: ''
};

const Container = ({ children, className }) => (
    <div className={classNames('flex flex__justifyContent_center', className)}>
        <div className="container">
            {children}
        </div>
    </div>
);

Container.propTpyes = propTypes;
Container.defaultProps = defaultProps;

export default Container;