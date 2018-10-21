import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/classNames';

import './index.scss';

const { node, string } = PropTypes;

const propTypes = {
    children: node.isRequired,
    className: string,
    containerClassName: string,
};

const defaultProps = {
    className: '',
    containerClassName: '',
};

const Container = ({ children, className, containerClassName }) => (
    <div className={classNames('flex flex__justifyContent_center', className)}>
        <div className={classNames('container', containerClassName)}>
            {children}
        </div>
    </div>
);

Container.propTpyes = propTypes;
Container.defaultProps = defaultProps;

export default Container;