import { faker } from '@faker-js/faker';

describe('Add employee', () => {
    it('adds an employee', () => {
        
        cy.login("Admin", "admin123")
        cy.get('.oxd-brand-banner > img').should('be.visible', 'Título')
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(faker.person.firstName())
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(faker.person.middleName())
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(faker.person.lastName())
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(faker.number.int(10))
       //cy.get('.oxd-button--secondary').click()
        cy.contains('Save').click()
        
    })

})