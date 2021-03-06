/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../../src/infra/screens/loginpage/loginPage.object';

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      cy.intercept(
        'https://instalura-api-git-master-omariosouto.vercel.app/api/login',
      ).as('userLogin');

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'marcos', password: 'senhasegura' })
        .submitLoginForm();

      // Asserções
      cy.url().should('include', '/app/profile');

      cy.wait('@userLogin').then((intercept) => {
        const { token } = intercept.response.body.data;
        cy.getCookie('APP_TOKEN')
          .should('exist')
          .should('have.property', 'value', token);
      });
    });
  });
});
