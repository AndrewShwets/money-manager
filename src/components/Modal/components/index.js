import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from 'react-modal';

const { bool, func, node } = PropTypes;

const propTypes = {
    onCloseModal: func.isRequired,
    afterOpenModal: func,
    isOpen: bool,
    children: node,
};

const defaultProps = {
    afterOpenModal: null,
    isOpen: false,
    children: null,
};

const Modal = ({
    isOpen,
    afterOpenModal,
    onCloseModal,
    children,
}) => {

    return (
        <ModalWindow
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={onCloseModal}
            contentLabel="Example Modal"
        >
            {children}
        </ModalWindow>
    )
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;