// <reference types="cypress" />

var faker = require('faker');

context('Funcionalidade Pré - Cadastro', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type('Teste123@!$@')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' ,'Detalhes da conta modificados com sucesso.')
    });

});

it('Deve completar o pré -Cadastro - usando comandos customizados', () => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')

    let faker2 = faker.internet.email()
    cy.preCadastro(faker2,'senha!@forte','Debora','Penimpedo' )
    cy.get('.woocommerce-message').should('contain' ,'Detalhes da conta modificados com sucesso.')
    


});
    
