import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import withExpenses from 'hoc/withExpenses';
import withCategories from 'hoc/withCategories';
import Spinner from 'components/Spinner';
import l from 'utils/translate';

const { shape, arrayOf, bool, string } = PropTypes;

class ExpensesSummary extends Component {
    static propTypes = {
        expenses: shape({
            items: arrayOf(shape({
                createdAt: string,
                name: string,
                id: string,
            })),
            isLoading: bool,
        }).isRequired,
        categories: shape({
            items: arrayOf(shape({
                categoryId: string,
                createdAt: string,
                description: string,
                expenseDate: string,
                expenseSum: string,
                id: string,
            })),
            isLoading: bool,
        }).isRequired,
    }

    render() {

        const {
            expenses: {
                items: expenses,
                isLoading: isLoadingExpenses,
            },
            categories: {
                items: categories,
                isLoading: isLoadingCategories,
            },
        } = this.props;

        console.log(this.props);

        return (
            <Spinner
                spin={isLoadingCategories || isLoadingExpenses}
                className="flex__item_justify"
            >
                <header className="text_center">
                    <h2>{l('ExpensesSummary')}</h2>
                </header>
                <section className="section">
                    vdsvds
                </section>
            </Spinner>
        );
    }
}

export default compose(
    withExpenses,
    withCategories,
)(ExpensesSummary);