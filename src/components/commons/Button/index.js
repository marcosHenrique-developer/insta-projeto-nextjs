import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrastText`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: 700;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${TextStyleVariantsMap.smallestException}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover, &:focus {
    opacity: 0.5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
