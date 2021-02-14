import React from 'react';
import Text from '../../foundation/Text';
import Button from '../Button';
import { Logo } from '../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';

const Menu = () => {
  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Perguntas',
      url: '/perguntas',
    },
    {
      text: 'Sobre',
      url: '/sobre',
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((item, i) => {
          return (
            <li key={i}>
              <Text tag="a" variant="smallestException" href={item.url}>
                {item.text}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RigthSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RigthSide>
    </MenuWrapper>
  );
};
export default Menu;
