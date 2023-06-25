describe('login spec', () => {
    it('success login', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("zkldn30@gmail.com")
      cy.get('#password').type("Acinanna3072")
      cy.get('.btn').click()
      cy.get('.txt-title.d-block').should('contain.text','Attention!')
    })

    it('invalid email', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("zkldn30gmail.com")
        cy.get('#password').type("Acinanna3072")
        cy.get('.btn').click()
        cy.get('#swal2-title').should('contain.text','We are sorry...')
      })

    it('invalid password', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("zkldn30@gmail.com")
        cy.get('#password').type("Acinanna")
        cy.get('.btn').click()
        cy.get('#swal2-title').should('contain.text','We are sorry...')
      })

})