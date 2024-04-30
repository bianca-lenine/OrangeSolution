describe('Login required fields validation', () => {
    it('validates login required fields', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible', 'Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible', 'Required')
        
       
    })
})