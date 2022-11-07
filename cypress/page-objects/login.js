export class LoginPage {

        fillUser(text){
            cy.get('#username').type(text)    
        }


        fillPass(text){
            cy.get('#password').type(text)
        }

        clickButtonLogin() {
            cy.get('.fa').click()
        }

        clearUserinformation() {
            cy.get('#username').clear()
        }

        clearPassinformation(){
            cy.get('#password').clear()
        }



}