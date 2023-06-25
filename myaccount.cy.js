describe('myaccount spec', () => {
    it('success create real account', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("zkldn30@gmail.com")
      cy.get('#password').type("Acinanna3072")
      cy.get('.btn').click()
      cy.get('[href="/create-account"] > .btn').click()
      cy.get('.btn').click()
    })

    it('success create demo account', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("zkldn30@gmail.com")
        cy.get('#password').type("Acinanna3072")
        cy.get('.btn').click()
        cy.get('[href="/create-account-demo"] > .btn').click()
        cy.get('.btn').click()
    })
})