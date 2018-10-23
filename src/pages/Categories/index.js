import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ROUTES from 'routes';
import withCategories from 'hoc/withCategories';
import l from 'utils/translate';
import Button from 'components/Button';

class Categories extends Component {


    render() {
        console.log(this.props);

        return (
            <div className="flex__item_justify">
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
            </div>
        );
    }
}

export default withCategories(Categories);