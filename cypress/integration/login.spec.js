/// <reference types="cypress" />

describe('test de login', () => { 
 beforeEach(() => {
  cy.visit('https://the-internet.herokuapp.com/') 
  cy.get(':nth-child(21) > a').click()
  
 })
 
   it('A valid user can login', () =>{

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('You logged into a secure area!')
   })


   it('An invalid password cannot login', () =>{
  
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("error!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
   })

   it('An invalid username cannot login', () =>{
   
    cy.get('#username').type('error!')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')
   })

   it('Blank information cannot login', () =>{

    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')
                
   })

   it ('A empty user and password cannot login', () =>{

    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
            
    })             


})