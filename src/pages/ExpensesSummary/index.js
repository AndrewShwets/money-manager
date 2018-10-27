import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { generatePath } from 'react-router';

import ROUTES from 'routes';
import PageHeader from 'components/PageHeader';
import FormGroup from 'components/Form';
import SelectWithCategories from 'components/Form/components/SelectWithCategories';
import withExpenses from 'hoc/withExpenses';
import withCategories from 'hoc/withCategories';
import Spinner from 'components/Spinner';
import Empty from 'components/Empty';
import l from 'utils/translate';
import Expense from './components/Expense';

const FormDecorator = FormGroup('sumExpenses');
const { shape, arrayOf, bool, string, func } = PropTypes;

class ExpensesSummary extends Component {
    static propTypes = {
        deleteExpense: func.isRequired,
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

    onSubmit = () => {

    }

    /**
     * Changes route for filter purposes
     * @param id
     */
    onChange = ({ target: { value: id } }) => {
        // generatePath without id throws an error
        const path = (
            id
                ? generatePath(ROUTES.expenses.path, {
                    id,
                })
                : generatePath(ROUTES.expenses.path)
        );

        this.props.history.push(path);
    }

    render() {
        const {
            deleteExpense,
            expenses: {
                items: expenses,
                isLoading: isLoadingExpenses,
            },
            categories: {
                items: categories,
                isLoading: isLoadingCategories,
            },
            match: {
                params: {
                    id: categoryRouteId,
                },
            }
        } = this.props;

        const normalizedCategories = categories.reduce((norm, category) => {
            return ({
                ...norm,
                [category.id]: {
                    ...category,
                },
            })
        }, {});

        // If the route is made by category we will filter then
        const routedCategory = categories.find((elem) => elem.id === categoryRouteId);

        const filteredExpenses = expenses.filter((expense) => (
            categoryRouteId && routedCategory
                ? expense.categoryId === categoryRouteId
                : true
        ));

        return (
            <Spinner
                spin={isLoadingCategories || isLoadingExpenses}
                className="flex__item_justify"
            >
                <PageHeader>
                    {l('ExpensesSummary')}
                </PageHeader>
                <section className="section col-6">
                    <FormDecorator
                        onSubmit={this.onSubmit}
                        initialValues={{
                            expensesFilterSelect: categoryRouteId,
                        }}
                    >
                        <SelectWithCategories
                            onChange={this.onChange}
                            name="expensesFilterSelect"
                        />
                    </FormDecorator>
                </section>
                <section className="section">
                    <table>
                        <thead>
                            <tr>
                                <th>{l('Discription')}</th>
                                <th>{l('Category')}</th>
                                <th>{l('Sum')}</th>
                                <th>{l('Date')}</th>
                                <th>{l('Actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExpenses.map(({ id, expenseDate, description, categoryId, expenseSum }) => {
                                return (
                                    <Expense
                                        key={id}
                                        name={description}
                                        id={id}
                                        date={expenseDate}
                                        sum={expenseSum}
                                        categoryId={categoryId}
                                        isFiltered={Boolean(categoryRouteId)}
                                        category={(
                                            normalizedCategories[categoryId]
                                                ? normalizedCategories[categoryId].name
                                                : 'category doesn\'t exist'
                                        )}
                                        onRemoveExpense={deleteExpense}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                    {!Boolean(filteredExpenses.length) && (
                        <Empty/>
                    )}
                </section>
            </Spinner>
        );
    }
}

export default compose(
    withExpenses,
    withCategories,
)(ExpensesSummary);