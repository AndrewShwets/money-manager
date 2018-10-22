import React from 'react'
import { Form, reduxForm } from 'redux-form';
import Input from 'components/Form/components/Input';
import l from 'utils/translate';
import Button from 'components/Button';

export default reduxForm({
    // a unique name for the form
    form: 'CategoriesForm'
})(props => {
    const { onSubmit, handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="First Name"
                name="firstName"
            />
            <Input
                label="Last Name"
                name="lastName"
            />
            <Input
                label="Email"
                name="email"
                type="email"
            />
            <Button type="submit">{l('Submit')}</Button>
        </Form>
    );
})