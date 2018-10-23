import React from 'react';
import PropTypes from 'prop-types';
import SpinnerIcon from './components/SpinnerIcon';

import './index.scss';

const { bool, node } = PropTypes;

const propTypes = {
    spin: bool,
    children: node,
};

const defaultProps = {
    spin: false,
    children: null,
};

const Spinner = ({ spin, children }) => (
    <div className="spinner">
        {spin && (
            <div className="flex flex__justifyContent_center spinner__icon">
                <SpinnerIcon/>
            </div>
        )}
        {children}
    </div>
);

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;