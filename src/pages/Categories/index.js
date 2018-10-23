import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ROUTES from 'routes';
import withCategories from 'hoc/withCategories';
import l from 'utils/translate';
import Button from 'components/Button';

import { CategoriesForm } from 'components/Form';

class Categories extends Component {
    onSubmit = (form) => {
        console.log(form);
    }

    render() {
        console.log(this.props);

        return (
            <div className="flex__item_justify">
                <header className="text_center">
                    <h2>{l('Categories')}</h2>
                </header>
                <section className="flex">
                    <Link
                        to={ROUTES.categories.actions.add_category.path}
                        className="pull_right btn btn_info"
                    >
                        {l('Create category')}
                    </Link>
                </section>
                <CategoriesForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

export default withCategories(Categories);