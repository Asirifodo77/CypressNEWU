class HomePage{

    elements ={
        original_text : () => cy.get(':nth-child(1) > .gb_t'),
    }

    loadMySite(){
        cy.fixture('example').then((dataOne)=>{
            cy.visit(dataOne.myTestURL)
            this.elements.original_text().should('have.text','Gmail')
            cy.screenshot('kkkk');
            
        }) 
    }
}
export default new HomePage();
