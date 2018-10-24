import React, { Component } from 'react';
import { compose } from 'redux';

import { ON_EDIT_CATEGORY } from 'constants/categories';
import ROUTES from 'routes';
import { CategoriesForm } from 'components/Form';
import withCategoryLoadingState from 'hoc/withCategoryLoadingState';
import withCategories from 'hoc/withCategories';
import Modal from 'components/Modal';
import Spinner from 'components/Spinner';

class EditCategoryModal extends Component {
    onCloseModal = () => {
        const { history } = this.props;

        history.push(ROUTES.categories.path);
    }

    /**
     * Saving addited category
     * @param {string} category
     * @param {function} dispatch
     * @returns {null}
     */
    onSubmit = ({ category }, dispatch) => {
        const {
            history,
            match: {
                params: {
                    id,
                },
            },
            categories: {
                items,
            },
        } = this.props;
        if (!category) return null;

        const hasCategory = items.find((elem) => elem.id === id);

        dispatch({
            type: ON_EDIT_CATEGORY,
            category: {
                ...hasCategory,
                name: category,
            },
            history,
        });
    }

    render() {
        const {
            isAddingCategory,
            categories: {
                items,
                isLoading,
            },
            match: {
                params: {
                    id,
                },
            },
        } = this.props;

        const hasCategory = items.find((elem) => elem.id === id);

        const category = {
            category: hasCategory && hasCategory.name,
        };

        return (
            <Modal
                isOpen
                onCloseModal={this.onCloseModal}
            >
                <Spinner spin={isAddingCategory || isLoading}>
                    {Boolean(items.length) && (
                        <CategoriesForm
                            onSubmit={this.onSubmit}
                            initialValues={category}
                        />
                    )}
                </Spinner>
            </Modal>
        );
    }
};

export default compose(
    withCategoryLoadingState,
    withCategories,
)(EditCategoryModal);