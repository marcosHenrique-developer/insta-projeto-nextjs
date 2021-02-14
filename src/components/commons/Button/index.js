import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';

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
  ${TextStyleVariants.smallestException}
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
export default Button;
