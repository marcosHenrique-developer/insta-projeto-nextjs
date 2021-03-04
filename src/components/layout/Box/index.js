import styled from 'styled-components';
import { propToStyle } from '../../commons/theme/utils/propStyle';

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}
    ${propToStyle('position')}
    ${propToStyle('top')}
    ${propToStyle('left')}
    ${propToStyle('right')}
    ${propToStyle('cursor')}
    ${propToStyle('width')}
    ${propToStyle('height')}
`;
