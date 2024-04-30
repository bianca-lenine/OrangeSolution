describe('Wrong password login test', () => {
    it('logins on OrangeHRM with wrong password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login("Admin", "admin")
        cy.get(".oxd-button").click()
        cy.get('.oxd-alert').should('be.visible', 'Alerta')
        cy.wait(1000).screenshot()
    
    })
})
