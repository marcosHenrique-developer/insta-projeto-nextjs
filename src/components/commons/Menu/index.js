import React from 'react';
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
      <MenuWrapper.LeftSide>Logo esquerda</MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((item, i) => {
          return (
            <li key={i}>
              <a href={item.url}>{item.text}</a>
            </li>
          );
        })}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RigthSide>Buttons</MenuWrapper.RigthSide>
    </MenuWrapper>
  );
};
export default Menu;
