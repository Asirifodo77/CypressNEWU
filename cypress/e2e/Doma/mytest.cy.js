describe('empty spec', () => {
  it('test1', () => {
    cy.visit('https://www.google.lk/')
    cy.get(':nth-child(1) > .gb_t').should('have.text','Gmail')
  })

  



})

