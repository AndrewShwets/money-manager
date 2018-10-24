import React, { Component } from 'react';

import { ON_ADD_CATEGORY } from 'constants/categories';
import ROUTES from 'routes';
import { CategoriesForm } from 'components/Form';
import withCategoryLoadingState from 'hoc/withCategoryLoadingState';
import Modal from 'components/Modal';
import Spinner from 'components/Spinner';

class AddCategoriesModal extends Component {
    onCloseModal = () => {
        const { history } = this.props;

        history.push(ROUTES.categories.path);
    }

    /**
     * Adds category to storage
     * @param {string} category
     * @param {function} dispatch
     * @returns {null}
     */
    onSubmit = ({ category }, dispatch) => {
        const { history } = this.props;
        if (!category) return null;

        dispatch({ type: ON_ADD_CATEGORY, category, history });
    }

    render() {
        const { isAddingCategory } = this.props;

        return (
            <Modal
                isOpen
                onCloseModal={this.onCloseModal}
            >
                <Spinner spin={isAddingCategory}>
                    <CategoriesForm
                        onSubmit={this.onSubmit}
                    />
                </Spinner>
            </Modal>
        );
    }
};

export default withCategoryLoadingState(AddCategoriesModal);