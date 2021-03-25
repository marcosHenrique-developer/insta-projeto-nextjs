import React from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import FormCadastro from '../../patterns/FormCadastro';
import Button from '../Button';
import Modal from '../Modal';
import { MenuWrapper } from './styles';

const Menu = () => {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'Perguntas', url: '/faq' },
    { text: 'Sobre', url: '/sobre' },
  ];
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <MenuWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(props) => <FormCadastro props={props} />}
      </Modal>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`link__${index}`}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button
          variant="primary.main"
          onClick={() => {
            setModalState(!isModalOpen);
          }}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
