import React from 'react';
import Proptypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import { Box } from '../../layout/Box';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;
const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function ModalLogin({ isOpen, onClose, children }) {
  const CloseModal = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      position="absolute"
      top={{
        xs: '30px',
        md: '20px',
      }}
      right={{
        xs: '40px',
        md: '30px',
      }}
      onClick={() => onClose()}
      cursor="pointer"
    >
      <img src="/images/close.svg" alt="Fechar" />
    </Box>
  );
  return (
    <ModalContainer
      isOpen={isOpen}
      onClick={(event) => {
        const safeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!safeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
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
          CloseModal,
        })}
      </motion.div>
    </ModalContainer>
  );
}

ModalLogin.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  children: Proptypes.func.isRequired,
  onClose: Proptypes.func.isRequired,
};

export default ModalLogin;
