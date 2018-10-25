import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from 'components/PageHeader';
import Spinner from 'components/Spinner';
import ROUTES from 'routes';
import withCategories from 'hoc/withCategories';
import l from 'utils/translate';
import Category from './components/Category';

import './index.scss';

class Categories extends Component {
    render() {
        const {
            categories: {
                items,
                isLoading,
            },
            deleteCategory,
        } = this.props;

        return (
            <Spinner
                spin={isLoading}
                className="flex__item_justify"
            >
                <PageHeader>
                    {l('Categories')}
                </PageHeader>
                <section className="flex">
                    <Link
                        to={ROUTES.categories.subRoute.add_category.path}
                        className="pull_right btn btn_info"
                    >
                        {l('Create category')}
                    </Link>
                </section>
                <section className="section">
                    {items.map(({ id, name }) => (
                        <Category
                            key={id}
                            id={id}
                            name={name}
                            onRemoveCategory={deleteCategory}
                        />
                    ))}
                </section>
            </Spinner>
        );
    }
}

export default withCategories(Categories);