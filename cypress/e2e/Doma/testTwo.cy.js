/// <reference types='Cypress' />

describe('My first test suite', () => {

    it('first test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        const expectedName = "ADD TO CART"
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').then( (x) =>{
            const actualName = x.text();
            expect(actualName).to.equal(expectedName)
        })
        
        cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
            let textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        
        

    })




})