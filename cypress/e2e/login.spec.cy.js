/// <reference types='cypress'/>

describe('CT - Validar login.', () => {
    beforeEach(() => {
      cy.visit("https://goldcsfront.onrender.com/login");
    });

    it("validar login com sucesso", () =>{
        cy.preencheerLoginComSucesso()
        cy.clicarBtnEntrar()
        cy.wait(30000)
        
    })
});