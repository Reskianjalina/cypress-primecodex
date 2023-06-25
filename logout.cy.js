describe('transfer spec', () => {
    it('success transfer', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("zkldn30@gmail.com")
        cy.get('#password').type("Acinanna3072")
        cy.get('.btn').click()
        cy.get('.logout-wrapper > .logout-btn').click()
        cy.get('.swal2-confirm').click()
        cy.get('.txt-title').should('contain.text','Login Account')
    })
})