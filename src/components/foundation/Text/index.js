import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const paragraph1 = css`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
`;

const smallestException = css`
  font-size: ${({ theme }) =>
    theme.typographyVariants.smallestException.fontSize};
  font-weight: ${({ theme }) =>
    theme.typographyVariants.smallestException.fontWeight};
  line-height: ${({ theme }) =>
    theme.typographyVariants.smallestException.lineHeight};
`;

export const TextStyleVariantsMap = {
  smallestException,
  paragraph1,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

const Text = ({ tag, variant, children, ...props }) => (
  <TextBase as={tag} variant={variant} {...props}>
    {children}
  </TextBase>
);

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};

Text.propTypes = {
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'li',
    'a',
    'span',
    'input',
  ]),
  children: PropTypes.node,
  variant: PropTypes.oneOf(['title', 'paragraph1', 'smallestException']),
};

export default Text;
