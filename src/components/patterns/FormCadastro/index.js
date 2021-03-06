/* eslint-disable no-console */
import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const FormContent = () => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    nome: '',
  });

  // eslint-disable-next-line operator-linebreak
  const isFormInvalid =
    userInfo.usuario.length === 0 || userInfo.nome.lenght === 0;

  async function resetValues() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsFormSubmited(false);
    setSubmissionStatus(formStates.DEFAULT);
    setUserInfo({ usuario: '', nome: '' });
  }

  function handleChange(ev) {
    const fieldName = ev.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: ev.target.value,
    });
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        setIsFormSubmited(true);
        setSubmissionStatus(formStates.LOADING);
        const userDTO = { username: userInfo.usuario, name: userInfo.nome };
        setTimeout(() => {
          fetch('https://instalura-api.vercel.app/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
            .then((respostaDoServidor) => {
              if (respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }
              throw new Error('Não foi possível cadastrar o usuário agora :(');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);
              resetValues();
              console.log(respostaConvertidaEmObjeto);
            })
            .catch((error) => {
              setSubmissionStatus(formStates.ERROR);
              resetValues();
              console.error(error);
            });
        }, 500);
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
        Você está a um passo de saber tudo que está rolando no bairro, complete
        seu cadastro
      </Text>
      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
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
      <Box display="flex" justifyContent="center">
        <Box width="150px" height="150px">
          {isFormSubmited && submissionStatus === formStates.LOADING && (
            <Lottie
              config={{
                animationData: loadingAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          )}
          {isFormSubmited && submissionStatus === formStates.DONE && (
            <Lottie
              config={{
                animationData: successAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          )}
          {isFormSubmited && submissionStatus === formStates.ERROR && (
            <Lottie
              config={{
                animationData: errorAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          )}
        </Box>
      </Box>
    </form>
  );
};

// eslint-disable-next-line react/prop-types
const FormCadastro = ({ props }) => (
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
        {props && <props.CloseButton />}
        <FormContent />
      </Box>
    </Grid.Col>
  </Grid.Row>
);

export default FormCadastro;
