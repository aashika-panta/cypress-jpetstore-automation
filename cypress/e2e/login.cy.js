describe('JPetStore Login Automation', () => {

    it('should open JPetStore', () => {

        cy.visit('https://petstore.octoperf.com/')

        cy.wait(2000)

    })

})