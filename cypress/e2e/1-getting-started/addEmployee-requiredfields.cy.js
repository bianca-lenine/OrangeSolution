
describe('New employee required fields validation', () => {
    it('validates new employee required fields', () => {
    
        cy.login()
        cy.get('.oxd-brand-banner > img').should('be.visible', 'Título')
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-button--secondary').click()
        cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('be.visible', 'Required')
        cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('be.visible', 'Required')

    
    
    })

    })