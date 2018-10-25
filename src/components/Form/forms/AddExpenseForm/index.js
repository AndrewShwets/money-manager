import React from 'react'
import { Form, reduxForm } from 'redux-form';
import Input from 'components/Form/components/Input';
import SelectWithCategories from 'components/Form/components/SelectWithCategories';
import l from 'utils/translate';
import Button from 'components/Button';

// @ TODO AndrewShwets add validation
// const validate = values => {
//     const errors = {};
//     if (!values.description) {
//         errors.description = 'Required'
//     }
//
//     if (!values.categoryId) {
//         errors.categoryId = 'Required'
//     }
//
//     if (!values.expenseDate) {
//         errors.email = 'Required'
//     }
//
//     if (!values.expenseSum) {
//         errors.expenseSum = 'Required'
//     } else if (isNaN(Number(values.age))) {
//         errors.expenseSum = 'Must be a number'
//     }
//
//     return errors
// }

export default reduxForm({
    // a unique name for the form
    form: 'AddExpenseForm',
    // validate,
})(props => {
    const { onSubmit, handleSubmit, syncErrors = {}, isEdit } = props;

    return (
        <Form className="clear__fix" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Description"
                name="description"
                error={syncErrors.description}
            />
            <Input
                label="The sum"
                name="expenseSum"
                type="number"
                error={syncErrors.expenseSum}
            />
            <Input
                label="Date"
                name="expenseDate"
                type="date"
                error={syncErrors.expenseDate}
            />
            <SelectWithCategories
                name="categoryId"
                error={syncErrors.categoryId}
            />
            <Button className="pull_right" type="submit">{l(isEdit ? 'Edit expense' : 'Add expense')}</Button>
        </Form>
    );
})