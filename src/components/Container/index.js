import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/classNames/index';

import './index.scss';

const { node, string, bool } = PropTypes;

const propTypes = {
    children: node.isRequired,
    className: string,
    containerClassName: string,
    flex: bool,
};

const defaultProps = {
    className: '',
    containerClassName: '',
    flex: true,
};

const Container = ({ children, className, containerClassName, flex }) => (
    <div className={classNames(flex ? 'flex flex__justifyContent_center' : '', className)}>
        <div className={classNames('flex container margin_auto', containerClassName)}>
            {children}
        </div>
    </div>
);

Container.propTpyes = propTypes;
Container.defaultProps = defaultProps;

export default Container;