import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import l from 'utils/translate';
import ROUTES from 'routes';

const { string, number, oneOfType } = PropTypes;

export default class ExpensesSummaryItem extends Component {
    static propTypes = {
        sum: oneOfType([string, number]).isRequired,
        dateFrom: oneOfType([string, number]).isRequired,
        dateTo: oneOfType([string, number]).isRequired,
        category: string.isRequired,
        id: string.isRequired,
    }

    render() {
        const {
            sum,
            dateFrom,
            dateTo,
            category,
            id,
        } = this.props;

        return (
            <tr className="expense">
                <td className="expense__title">
                    {category}
                </td>
                <td className="text_center">
                    {sum}
                </td>
                <td className="expense__date text_center">
                    {new Date(dateFrom).toDateString()}
                </td>
                <td className="expense__date text_center">
                    {new Date(dateTo).toDateString()}
                </td>
                <td className="expense__link">
                    <Link
                        to={{
                            pathname: generatePath(ROUTES.expenses.path, {
                                id,
                            }),
                            state: {
                                category: id,
                            }
                        }}
                        className="pull_right btn btn_info"
                    >
                        {l('Edit')}
                    </Link>
                </td>
            </tr>
        )
    }
};
