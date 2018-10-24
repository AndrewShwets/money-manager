import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import Button from 'components/Button';
import ROUTES from 'routes';
import l from 'utils/translate';
import './index.scss';

const { string, func } = PropTypes;

export default class Category extends Component {
    static propTypes = {
        onRemoveCategory: func.isRequired,
        id: string.isRequired,
        name: string.isRequired,
    }

    onRemoveCategory = () => {
        const { onRemoveCategory, id } = this.props;

        onRemoveCategory(id);
    }

    render() {
        const { id, name } = this.props;

        return (
            <div className="flex category">
                <div className="category__title">
                    {name}
                </div>
                <div className="category__actions">
                    <Link
                        to={generatePath(ROUTES.categories.subRoute.edit_category.path, {
                            id,
                        })}
                        className="pull_right btn btn_info"
                    >
                        {l('Edit')}
                    </Link>
                    <Button
                        onClick={this.onRemoveCategory}
                        className="pull_right btn btn_info"
                    >
                        {l('Delete')}
                    </Button>
                </div>
            </div>
        )
    }
};
