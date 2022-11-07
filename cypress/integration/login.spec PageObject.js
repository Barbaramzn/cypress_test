/// <reference types="cypress" />
import {MainPage} from '../page-objects/main'
import {LoginPage} from '../page-objects/login'
import {WelcomePage} from '../page-objects/welcome'


describe('test de login', () => { 
  const loginPage = new LoginPage()
  const mainPage = new MainPage()
  const welcomePage = new WelcomePage()


 beforeEach(() => {
  mainPage.navigate()
  mainPage.clickLoginOption()
  
  
   })
 
   it('A valid user can login', () =>{
    loginPage.fillUser('tomsmith')
    loginPage.fillPass('SuperSecretPassword!')
    loginPage.clickButtonLogin()
    welcomePage.checkMessage('You logged into a secure area!')
    
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