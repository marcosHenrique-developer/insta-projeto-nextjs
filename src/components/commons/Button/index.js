/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../theme/utils/breakpointMedia';
import { propToStyle } from '../theme/utils/propStyle';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;
const ButtonDefault = css`
  color: white;
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrasText`)}; ;
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${({ fullWidth }) =>
    // eslint-disable-next-line operator-linebreak
    fullWidth &&
    css`
      width: 100%;
    `};
  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
export default Button;
