import React from 'react'
import PropTpyes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'utils/classNames';
import l from 'utils/translate';

import './index.scss';

const { string, oneOf, oneOfType, func } = PropTpyes;

const FORM_GROUP_TYPE = {
    left: 'horizontal',
    top: 'vertical',
};

const propTypes = {
    name: string.isRequired,
    className: string,
    label: string,
    labelPosition: oneOf(['top', 'left']),
    type: oneOf(['text', 'email']),
    component: oneOfType([string, func]),
};

const defaultProps = {
    className: '',
    label: '',
    labelPosition: 'left',
    type: 'text',
    component: 'input',
};

const Input = ({
   className,
   type,
   component,
   name,
   labelPosition,
    label,
}) => (
    <div className={classNames(`flex flex__alignContent_center form__group form__group_${FORM_GROUP_TYPE[labelPosition]}`, className)}>
        {label && (
            <label htmlFor={name}>{l(label)}</label>
        )}
        <Field
            name={name}
            component={component}
            type={type}
            className="form__control"
        />
    </div>
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;