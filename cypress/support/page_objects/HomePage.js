class HomePage{

    elements ={
        original_text : () => cy.get(':nth-child(1) > .gb_t'),
    }

    loadMySite(){
        cy.fixture('example').then((dataOne)=>{
            cy.task('log', '#################'+Cypress.env('env'))
            if(Cypress.env('env')=='dev'){
                cy.visit(dataOne.myTestURL)
                this.elements.original_text().should('have.text','Gmail')
            }else if(Cypress.env('env')=='qa'){
                cy.visit(dataOne.myTestURL_QA)
                this.elements.original_text().should('have.text','Gmail')
            }
            cy.screenshot('kkkk');
        }) 
    }
}
export default new HomePage();
