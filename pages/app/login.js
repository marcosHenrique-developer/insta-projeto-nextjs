import React from 'react';
import { Links } from '../../src/components/commons/Link';
import { Box } from '../../src/components/foundation/layout/Box';
import { Grid } from '../../src/components/foundation/layout/Grid';
import Text from '../../src/components/foundation/Text';
import LoginForm from '../../src/components/patterns/loginForm';
import { WebsitePageContext } from '../../src/components/WebSitePageProvider';
import websitePageHOC from '../../src/components/WebSitePageProvider/hoc';
import Logo from '../../src/theme/Logo';

// Essa página e desafio, e vamos dar pronto no próximo módulo o 04
function LoginScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Grid.Container display="flex" flex="1" alignItems="center">
      <Grid.Row flex="1" alignItems="center" justifyContent="center">
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Links href="/" color="secondary.main">
              <Logo size="large" />
            </Links>
          </Box>
          <LoginForm />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Links
              href="/"
              color="secondary.main"
              onClick={(event) => {
                event.preventDefault();
                websitePageContext.toggleModalCadastro();
              }}
            >
              Cadastre-se
            </Links>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box display="flex" justifyContent="center">
            <img
              align="center"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
