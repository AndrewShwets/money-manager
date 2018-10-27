import React, { Component } from 'react';
import AddExpenseForm from 'components/Form/forms/AddExpenseForm';
import l from 'utils/translate';
import withExpenseAddingLoadState from 'hoc/withExpenseAddingLoadState';
import Spinner from 'components/Spinner';
import * as types from '@constants/expenses';

class ExpensesAdd extends Component {
    constructor(props) {
        super(props);

        this._form = null;
    }

    onSubmit = (values, dispatch) => {
        // Dispatch only when fields are filled in
        if (Object.keys(values).length) {
            dispatch({
                type: types.ON_ADD_EXPENSE,
                expense: values,
                resetForm: this.resetForm,
            });
        }
    }

    resetForm = () => {
        this._form.reset();
    }

    render() {
        const { isAddingExpense } = this.props;
        
        return (
            <Spinner
                spin={isAddingExpense}
                className="flex__item_justify"
            >
                <header className="text_center">
                    <h2>{l('ExpensesAdd')}</h2>
                </header>
                <section className="section">
                    <AddExpenseForm
                        ref={(form) => this._form = form}
                        destroyOnUnmount={false}
                        onSubmit={this.onSubmit}
                    />
                </section>
            </Spinner>
        );
    }
}

export default withExpenseAddingLoadState(ExpensesAdd);

