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
        <Form className="clear__fix" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Category name"
                name="category"
            />
            <Button className="pull_right" type="submit">{l('Create category')}</Button>
        </Form>
    );
})