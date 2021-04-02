import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import TextField from '../../forms/TextField';
import Button from '../../commons/Button';
import { useForm } from '../../../infra/hooks/useForm';
import { loginService } from '../../../services/login/loginService';
import LoadingAnimation from '../FormCadastro/animations/loading.json';
import ErrorAnimation from '../FormCadastro/animations/error.json';
import { Box } from '../../foundation/layout/Box';

const formStates = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
};

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

export default function LoginForm({ onSubmit }) {
  const [submissionStatus, setSubmissionStatus] = React.useState('');

  async function resetValues() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setSubmissionStatus('');
  }

  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      setSubmissionStatus(formStates.LOADING);
      form.setIsFormDisabled(true);
      loginService
        .login({
          username: values.usuario, // 'omariosouto'
          password: values.senha, // 'senhasegura'
        })
        .then(() => {
          router.push('/app/profile');
        })
        .catch(() => {
          // Desafio: Mostrar o erro na tela
          setSubmissionStatus(formStates.ERROR);
          resetValues();
        })
        .finally(() => {
          form.setIsFormDisabled(false);
          resetValues();
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      <Box display="flex" justifyContent="center">
        <Box width="50px" height="50px">
          {submissionStatus === formStates.LOADING && (
            <Lottie
              config={{
                animationData: LoadingAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          )}
          {submissionStatus === formStates.ERROR && (
            <Lottie
              config={{
                animationData: ErrorAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          )}
        </Box>
      </Box>
    </form>
  );
}

LoginForm.defaultProps = {
  onSubmit: undefined,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
