export class Example1Page{

    checkElements(number) {
        cy.get('li').should('have.length', number)

    }

    


}