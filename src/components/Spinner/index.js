import React from 'react';
import PropTypes from 'prop-types';
import SpinnerIcon from './components/SpinnerIcon';
import classNames from 'utils/classNames';

import './index.scss';

const { bool, node, string } = PropTypes;

const FLEX_STYLE = 'flex flex__justifyContent_center flex__alignContent_center';

const propTypes = {
    className: string,
    spin: bool,
    children: node,
};

const defaultProps = {
    className: '',
    spin: false,
    children: null,
};

const Spinner = ({ spin, children, className }) => (
    <div className={classNames('spinner', className)}>
        {spin && (
            <div className={`${FLEX_STYLE} spinner__icon`}>
                <SpinnerIcon/>
            </div>
        )}
        {children}
    </div>
);

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;