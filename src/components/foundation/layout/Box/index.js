import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
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
