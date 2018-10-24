import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenses } from 'selectors';
import { expenses as expensesActions } from 'actions';

export default (ComposedComponent, actions = null) => {
    class WithExpenses extends Component {
        componentDidMount() {
            const {
                expenses: {
                    items,
                },
                getExpenses,
            } = this.props;

            // Fetching categories only if app hasn't gotten them yet
            if (!Boolean(items.length)) {
                getExpenses();
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    return (
        connect(expenses, {
            ...actions,
            ...expensesActions
        })(WithExpenses)
    );
}