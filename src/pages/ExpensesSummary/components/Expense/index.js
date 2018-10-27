import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import Button from 'components/Button';
import ROUTES from 'routes';
import l from 'utils/translate';
import './index.scss';

const { string, func, bool } = PropTypes;

export default class Expense extends Component {
    static propTypes = {
        onRemoveExpense: func.isRequired,
        id: string.isRequired,
        name: string.isRequired,
        sum: string.isRequired,
        categoryId: string,
        isFiltered: bool,
    }

    onRemoveExpense = () => {
        const { onRemoveExpense, id } = this.props;

        onRemoveExpense(id);
    }

    render() {
        const { id, name, date, category, sum, categoryId, isFiltered } = this.props;

        const generatedLink = (
            isFiltered
                ? generatePath(ROUTES.expenses.subRoute.edit_expense_filtered.path, {
                    expense: id,
                    id: categoryId,
                })
                : generatePath(ROUTES.expenses.subRoute.edit_expense.path, {
                    expense: id,
                })
        );

        return (
            <tr className="expense">
                <td className="expense__title">
                    {name}
                </td>
                <td className="text_center">
                    {category}
                </td>
                <td className="text_center">
                    {sum}
                </td>
                <td className="expense__date text_center">
                    {date}
                </td>
                <td className="expense__actions">
                    <Button
                        onClick={this.onRemoveExpense}
                        className="pull_right btn btn_info"
                    >
                        {l('Delete')}
                    </Button>
                    <Link
                        to={generatedLink}
                        className="pull_right btn btn_info"
                    >
                        {l('Edit')}
                    </Link>
                </td>
            </tr>
        )
    }
};
