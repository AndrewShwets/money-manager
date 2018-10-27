import React, { Component } from 'react';
import { generatePath } from 'react-router';
import { compose } from 'redux';

import { ON_EDIT_EXPENSE } from '@constants/expenses';
import { AddExpenseForm } from 'components/Form';
import withExpenseAddingLoadState from 'hoc/withExpenseAddingLoadState';
import withExpenses from 'hoc/withExpenses';
import ROUTES from 'routes';
import Modal from 'components/Modal';
import Spinner from 'components/Spinner';

class EditExpenseModal extends Component {
    onCloseModal = () => {
        const {
            history,
            match: {
                params: {
                    id,
                },
            }
        } = this.props;

        // If we has came from filtred expenses by structure
        if (id) {
            history.push(generatePath(ROUTES.expenses.path, {
                id,
            }));
        } else {
            // Otherwise routing to root expense page
            history.push(generatePath(ROUTES.expenses.path));
        }
    }

    /**
     * Saving addited expense
     * @param {string} newExpense
     * @param {function} dispatch
     * @returns {null}
     */
    onSubmit = (newExpense, dispatch) => {
        const {
            history,
            match: {
                params: {
                    expense: id,
                },
            },
            expenses: {
                items,
            },
        } = this.props;

        if (!Object.keys(newExpense).length) return null;

        const expense = items.find((elem) => elem.id === id);

        dispatch({
            type: ON_EDIT_EXPENSE,
            expense: {
                ...expense,
                ...newExpense,
            },
            history,
        });
    }

    render() {
        const {
            isAddingExpense,
            expenses: {
                items,
                isLoading,
            },
            match: {
                params: {
                    expense: id,
                },
            },
        } = this.props;

        const expense = items.find((elem) => elem.id === id);

        return (
            <Modal
                isOpen
                onCloseModal={this.onCloseModal}
            >
                <Spinner spin={isAddingExpense || isLoading}>
                    {Boolean(items.length) && (
                        <AddExpenseForm
                            onSubmit={this.onSubmit}
                            initialValues={expense}
                            isEdit
                        />
                    )}
                </Spinner>
            </Modal>
        );
    }
};

export default compose(
    withExpenses,
    withExpenseAddingLoadState,
)(EditExpenseModal);