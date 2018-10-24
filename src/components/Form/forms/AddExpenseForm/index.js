import React from 'react'
import { Form, reduxForm } from 'redux-form';
import Input from 'components/Form/components/Input';
import SelectWithCategories from 'components/Form/components/SelectWithCategories';
import l from 'utils/translate';
import Button from 'components/Button';

export default reduxForm({
    // a unique name for the form
    form: 'AddExpenseForm',
})(props => {
    const { onSubmit, handleSubmit } = props;

    return (
        <Form className="clear__fix" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Description"
                name="description"
            />
            <Input
                label="The sum"
                name="expenseSum"
                type="number"
            />
            <Input
                label="Date"
                name="expensneDate"
                type="date"
            />
            <SelectWithCategories
                name="categoryId"
            />
            <Button className="pull_right" type="submit">{l('Add expense')}</Button>
        </Form>
    );
})