import React, { Component } from 'react';

import { ON_ADD_CATEGORY } from 'constants/categories';
import ROUTES from 'routes';
import { CategoriesForm } from 'components/Form';
import withAddingCategoryState from 'hoc/withAddingCategoryState';
import Modal from 'components/Modal';
import Spinner from 'components/Spinner';

class AddCategoriesModal extends Component {
    onCloseModal = () => {
        const { history } = this.props;

        history.push(ROUTES.categories.path);
    }

    onSubmit = (form, dispatch) => {
        console.log(form);
        dispatch({ type: ON_ADD_CATEGORY });
    }

    render() {
        const { isAddingCategory } = this.props;

        console.log(this.props);

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

export default withAddingCategoryState(AddCategoriesModal);