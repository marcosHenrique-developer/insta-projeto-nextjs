import styled, { css, createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.2);
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
      overflow: hidden;
    `;
  }}
`;

ModalWrapper.LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
