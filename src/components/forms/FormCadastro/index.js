import React from 'react';
import { Lottie } from '@crello/react-lottie';

import Button from '../../commons/Button';
import TextField from '../TextField';
import Text from '../../foundation/Text';
import { Box } from '../../layout/Box';
import { Grid } from '../../layout/Grid';

import errorAnimation from './animations/errorAnimation.json';
import loadingAnimation from './animations/loadingAnimation.json';
import sucessAnimation from './animations/sucessAnimation.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStates.DEFAULT,
  );

  const [userInfo, setUserInfo] = React.useState({
    user: '',
    nome: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  // eslint-disable-next-line operator-linebreak
  const isFormInvalid =
    userInfo.user.length === 0 || userInfo.nome.length === 0;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);
        const userDTO = {
          username: userInfo.user,
          name: userInfo.nome,
        };
        setSubmissionStatus(formStates.LOADING);
        setTimeout(() => {
          fetch('https://instalura-api.vercel.app/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error(
                'Não foi possível cadastrar, Provavelmente o nome e usuario ja existem',
              );
            })
            .then((objectResponse) => {
              setSubmissionStatus(formStates.DONE);
              // eslint-disable-next-line no-console
              console.log(objectResponse);
            })
            .catch((err) => {
              setSubmissionStatus(formStates.ERROR);
              // eslint-disable-next-line no-console
              console.log(err);
            })
            .finally(() => {
              setTimeout(() => {
                setIsFormSubmited(false);
                setUserInfo({
                  user: '',
                  nome: '',
                });
              }, 2500);
            });
        }, 1000);
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="user"
          value={userInfo.user}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: sucessAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: loadingAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: errorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ props }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          <props.m />
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
