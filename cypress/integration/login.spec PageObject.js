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
    loginPage.fillUser('tomsmith')
    loginPage.fillPass('error!')
    loginPage.clickButtonLogin()
    welcomePage.checkMessage('Your password is invalid!')

    
   })

   it('An invalid username cannot login', () =>{
    loginPage.fillUser('error!')
    loginPage.fillPass('SuperSecretPassword!')
    loginPage.clickButtonLogin()
    welcomePage.checkMessage('Your username is invalid!')

    
   })

   it('Blank information cannot login', () =>{
    loginPage.clickButtonLogin()
    welcomePage.checkMessage('Your username is invalid!')
    
                    
   })

   it ('A empty user and password cannot login', () =>{
    loginPage.clearUserinformation()
    loginPage.clearPassinformation()
    loginPage.clickButtonLogin()
    welcomePage.checkMessage('Your username is invalid!')
    
            
    })             


})