import React from 'react';
import { compose } from 'redux';

import withCategories from 'hoc/withCategories';
import withExpenses from 'hoc/withExpenses';
import l from 'utils/translate';
import apiCall from 'utils/apiCall';
import PageHeader from 'components/PageHeader';
import Spinner from 'components/Spinner';
import Button from 'components/Button';

import withChartData from './hoc/withChartData';
import ExpensesSummaryItem from './components/ExpensesSummaryItem';

const getUsers = async () => {
    const users = await apiCall({ url: 'users' });

    console.log('users', users);
}

const Home = (props) => {
    const {
        categories: {
            items,
            isLoading,
        },
        normalizedExpenses,
    } = props;

    return (
        <Spinner
            spin={isLoading}
            className="flex__item_justify"
        >
            <PageHeader>
                {l('NomePage')}
                <Button onClick={getUsers}>Get users</Button>
            </PageHeader>
            <section className="section">
                <table>
                    <thead>
                    <tr>
                        <th>{l('Category')}</th>
                        <th>{l('Sum')}</th>
                        <th className="text_left">{l('From')}</th>
                        <th colSpan='2' className="text_left">{l('To')}</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                        {items.map(({ id, name }) => {
                            if (normalizedExpenses[id]) {
                                return (
                                    <ExpensesSummaryItem
                                        key={id}
                                        sum={normalizedExpenses[id].expenseSum}
                                        dateFrom={Math.min(...normalizedExpenses[id].expenseDate)}
                                        dateTo={Math.max(...normalizedExpenses[id].expenseDate)}
                                        category={name}
                                        id={id}
                                    />
                                )
                            } else {
                                return null;
                            }
                        })}
                    </tbody>
                </table>
            </section>
        </Spinner>

    );
};

export default compose(
    withCategories,
    withExpenses,
    withChartData,
)(Home);