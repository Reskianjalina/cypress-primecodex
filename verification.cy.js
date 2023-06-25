import 'cypress-file-upload';

describe('verification spec', () => {
    it('success verification', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("zkldn30@gmail.com")
      cy.get('#password').type("Acinanna3072")
      cy.get('.btn').click()
      cy.get('.content > :nth-child(2) > .btn').click()
      cy.get('#type').select('ID Card')
      cy.get('#id-number').type("1234567890123456")
      cy.get('.beforeUpload > input')
      .selectFile('cypress/fixtures/fotoanktp.jpg')
      cy.get('.imageHolder > img').click()
      cy.get('.btn').click()
      cy.get('.swal2-confirm').click()
    })

    it('empty document', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("zkldn30@gmail.com")
      cy.get('#password').type("Acinanna3072")
      cy.get('.btn').click()
      cy.get('.content > :nth-child(2) > .btn').click()
      cy.get('#type').select('ID Card')
      cy.get('#id-number').type("1234567890123456")
      cy.get('.btn').click()
    })

    it('empty id number', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("zkldn30@gmail.com")
      cy.get('#password').type("Acinanna3072")
      cy.get('.btn').click()
      cy.get('.content > :nth-child(2) > .btn').click()
      cy.get('#type').select('ID Card')
      cy.get('.beforeUpload > input')
      .selectFile('cypress/fixtures/fotoanktp.jpg')
      cy.get('.imageHolder > img').click()
      cy.get('.btn').click()
    })

    it('empty id type', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("zkldn30@gmail.com")
      cy.get('#password').type("Acinanna3072")
      cy.get('.btn').click()
      cy.get('.content > :nth-child(2) > .btn').click()
      cy.get('#id-number').type("1234567890123456")
      cy.get('.beforeUpload > input')
      .selectFile('cypress/fixtures/fotoanktp.jpg')
      cy.get('.imageHolder > img').click()
      cy.get('.btn').click()
    })
})