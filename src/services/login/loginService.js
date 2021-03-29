/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isSage';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((respostaDoServer) => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }
    throw new Error('Falha em pegar os dados do servidor :(');
  });
}
const BASE_URL = isStagingEnv
  ? // Back End de DEV
    'https://instalura-api-git-master-omariosouto.vercel.app'
  : // Back End de PROD
    'https://instalura-api.omariosouto.vercel.app';

// eslint-disable-next-line import/prefer-default-export
export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhasegura'
      },
    }).then((respostaConvertida) => {
      const { token } = respostaConvertida.data;
      const dayInSeconds = 86400;
      // save token
      setCookie(null, 'APP_TOKEN', token, {
        path: '/',
        maxAge: dayInSeconds * 7,
      });
      return {
        token,
      };
    });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};
