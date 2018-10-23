import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Spinner from 'components/Spinner';
import ROUTES from 'routes';
import withCategories from 'hoc/withCategories';
import l from 'utils/translate';

class Categories extends Component {


    render() {
        console.log(this.props);
        const {
            categories: {
                items,
                isLoading,
            },
        } = this.props;

        return (
            <Spinner
                spin={isLoading}
                className="flex__item_justify"
            >
                <header className="text_center">
                    <h2>{l('Categories')}</h2>
                </header>
                <section className="flex">
                    <Link
                        to={ROUTES.categories.subRoute.add_category.path}
                        className="pull_right btn btn_info"
                    >
                        {l('Create category')}
                    </Link>
                </section>
            </Spinner>
        );
    }
}

export default withCategories(Categories);