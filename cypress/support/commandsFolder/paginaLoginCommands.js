// import json from '../../fixtures/loginAdministrador.json'

const campoEmail = '#login_username'
const campoSenha = '#login_password'
const btnEntrar = 'button'

Cypress.Commands.add("preencheerLoginComSucesso",()=>{
    cy.get(campoEmail).type('franchesco@gmail.com');
    cy.get(campoSenha).type('Fatec@12345');
})

Cypress.Commands.add("clicarBtnEntrar",()=>{
    cy.get(btnEntrar).click({force:true})
})