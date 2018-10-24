import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from 'react-modal';

const customStyles = {
    content: {
        top: '50px',
        left: '50%',
        bottom: '30%',
        width: '600px',
        transform: 'translateX(-50%)'
    }
};

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
            style={customStyles}
        >
            {children}
        </ModalWindow>
    )
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;