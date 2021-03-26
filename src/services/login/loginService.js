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

// eslint-disable-next-line import/prefer-default-export
export const loginService = {
  async login({ username, password }) {
    return HttpClient(
      'https://instalura-api-git-master-omariosouto.vercel.app/api/login',
      {
        method: 'POST',
        body: {
          username, // 'omariosouto'
          password, // 'senhasegura'
        },
      },
    ).then((respostaConvertida) => respostaConvertida);
  },
};
