describe('empty spec', () => {
  it('test1', () => {
    cy.visit('https://www.internetdownloadmanager.com/download.html');
    cy.get('div > .cta-btn').should('have.attr', 'href');
    cy.downloadFile('https://download.internetdownloadmanager.com/idman641build15.exe?v=lt&filename=idman641build15.exe','cypress/mydownloads','idmTest.exe');
    
    cy.get("./mydownloads/idmTest.exe").should('exist')
    



  })

  



})

