import React from 'react'
import PropTpyes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'utils/classNames';
import l from 'utils/translate';

import './index.scss';

const { string, oneOf, oneOfType, func, node } = PropTpyes;

const FORM_GROUP_TYPE = {
    left: 'horizontal',
    top: 'vertical',
};

const propTypes = {
    onChange: func,
    name: string.isRequired,
    className: string,
    label: string,
    error: string,
    labelPosition: oneOf(['top', 'left']),
    type: oneOf(['text', 'email', 'select', 'number', 'date']),
    component: oneOfType([string, func]),
    children: node,
};

const defaultProps = {
    onChange: null,
    className: '',
    label: '',
    error: '',
    labelPosition: 'left',
    type: 'text',
    component: 'input',
    children: null,
};

const Input = ({
    onChange,
    className,
    type,
    component,
    name,
    labelPosition,
    children,
    label,
    error,
}) => (
    <div className={classNames(`flex flex__alignContent_center form__group form__group_${FORM_GROUP_TYPE[labelPosition]}`, className)}>
        {label && (
            <label htmlFor={name}>{l(label)}</label>
        )}
        <Field
            name={name}
            component={component}
            type={type}
            onChange={onChange}
            className="form__control flex__item_justify"
        >
            {children}
        </Field>
        {error && (
            <div className="text_danger">{l(error)}</div>
        )}
    </div>
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;