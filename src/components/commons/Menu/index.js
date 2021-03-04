/* eslint-disable indent */
import React from 'react';
import FormCadastro from '../../forms/FormCadastro';
import Text from '../../foundation/Text';
import Button from '../Button';
import ModalLogin from '../Modal';
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
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <MenuWrapper>
      <ModalLogin
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {(props) => <FormCadastro props={props} />}
      </ModalLogin>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((item) => (
          <li key={item}>
            <Text tag="a" variant="smallestException" href={item.url}>
              {item.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RigthSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button
          variant="primary.main"
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RigthSide>
    </MenuWrapper>
  );
};
export default Menu;
