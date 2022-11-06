/// <reference types="cypress" />


it('A page contains 5 elements', ()=>{
cy.visit('https://the-internet.herokuapp.com/')
cy.get(':nth-child(39) > a').click()
cy.get('[href="/shifting_content/menu"]').click()
cy.get('#content').children().should('have.length', 5)






})