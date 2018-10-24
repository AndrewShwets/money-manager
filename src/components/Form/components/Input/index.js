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
    name: string.isRequired,
    className: string,
    label: string,
    labelPosition: oneOf(['top', 'left']),
    type: oneOf(['text', 'email', 'select', 'number', 'date']),
    component: oneOfType([string, func]),
    children: node,
};

const defaultProps = {
    className: '',
    label: '',
    labelPosition: 'left',
    type: 'text',
    component: 'input',
    children: null,
};

const Input = ({
   className,
   type,
   component,
   name,
   labelPosition,
   children,
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
            className="form__control flex__item_justify"
        >
            {children}
        </Field>
    </div>
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;