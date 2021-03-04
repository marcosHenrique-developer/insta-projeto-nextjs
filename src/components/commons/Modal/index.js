import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ModalWrapper } from './styles';
import { Box } from '../../foundation/layout/Box';

const Modal = ({ isOpen, onClose, children }) => {
  const CloseButton = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      position="absolute"
      top={{
        xs: '30px',
        md: '30px',
      }}
      right={{
        xs: '40px',
        md: '30px',
      }}
      onClick={() => onClose()}
      cursor="pointer"
    >
      <img src="/images/closeButton.svg" alt="botoa de fechar" />
    </Box>
  );

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(ev) => {
        const isSafeArea = ev.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <ModalWrapper.LockScroll />}
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
          CloseButton,
        })}
      </motion.div>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
