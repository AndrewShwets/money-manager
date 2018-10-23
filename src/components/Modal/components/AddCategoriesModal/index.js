import React, { Component } from 'react';

import ROUTES from 'routes';
import { CategoriesForm } from 'components/Form';

import Modal from 'components/Modal';

export default class AddCategoriesModal extends Component {
    onCloseModal = () => {
        const { history } = this.props;

        history.push(ROUTES.categories.path);
    }

    onSubmit = (form) => {
        console.log(form);
    }

    render() {

        return (
            <Modal
                isOpen
                onCloseModal={this.onCloseModal}
            >
                <div>
                    <CategoriesForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </Modal>
        );
    }
}