/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import FormCadastro from '../src/components/patterns/FormCadastro';

import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import Modal from '../src/components/commons/Modal';
import { SEO } from '../src/components/commons/SEO';

export default function Home() {
  const [isModalOpen, setModalState] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <SEO headTitle="Home" />
      <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
        {(props) => <FormCadastro props={props} />}
      </Modal>

      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos.
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicingsdfsdsdfsdf.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => setModalState(!isModalOpen)}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Imagem Aplicativo"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
