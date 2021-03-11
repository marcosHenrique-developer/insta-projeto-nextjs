import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

// eslint-disable-next-line import/prefer-default-export
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
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${({ theme, borderRadiusTheme }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;
