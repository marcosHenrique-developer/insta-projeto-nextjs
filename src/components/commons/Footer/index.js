/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 14px 28px;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante o{' '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
