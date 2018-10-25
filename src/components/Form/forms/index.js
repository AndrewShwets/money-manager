import React from 'react'
import { Form, reduxForm } from 'redux-form';

/**
 * Form for using input elements
 * @param name
 * @constructor
 */
const FormGroup = (name) => {
    if (!name) throw new Error('FormGroup: \n name is required parameter');

    return (
        reduxForm({
            // a unique name for the form
            form: 'CategoriesForm',
        })(props => {
            const { onSubmit, handleSubmit, children } = props;

            return (
                <Form className="clear__fix" onSubmit={handleSubmit(onSubmit)}>
                    {children}
                </Form>
            );
        })
    )
};

export default FormGroup;