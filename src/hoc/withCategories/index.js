import React, { Component } from 'react';

import { connect } from 'react-redux';
import { categories } from 'selectors';
import { categories as categoriesActions } from 'actions';

const { getCategories } = categoriesActions;

export default (ComposedComponent, actions = null) => {
    class WithCategories extends Component {
        componentDidMount() {
            const {
                categories: {
                    items,
                },
                getCategories,
            } = this.props;

            // Fetching categories only if app hasn't gotten them yet
            if (!Boolean(items.length)) {
                getCategories();
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    return (
        connect(categories, {
            ...actions,
            getCategories,
        })(WithCategories)
    );
}