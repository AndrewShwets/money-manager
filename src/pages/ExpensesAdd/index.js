import React, { Component } from 'react';
import AddExpenseForm from 'components/Form/forms/AddExpenseForm';
import l from 'utils/translate';

export default class ExpensesAdd extends Component {
    constructor(props) {
        super(props);

        this._form = null;
    }

    onSubmit = (values, dispatch) => {
        console.log(values);

        this._form.reset();
    }

    render() {

        return (
            <div className="flex__item_justify">
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
            </div>
        );
    }
}

