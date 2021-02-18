import styled from 'styled-components';
import { propToStyle } from '../../commons/theme/utils/propStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
`;
