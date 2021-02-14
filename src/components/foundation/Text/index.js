import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;
const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;
export const TextStyleVariants = {
  smallestException,
  paragraph1,
};
const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}/* color: ${({
    theme,
    color,
  }) => get(theme, `colors.${color}.color`)}; */
`;
export default function Text({ variant, children, tag }) {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.PropTypes.string.isRequired,
  variant: PropTypes.PropTypes.string.isRequired,
};
