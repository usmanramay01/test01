describe('my first test',function(){
    it('makes an assertion',function()
        {
        cy.visit('https://dev.skinnymint.com')
        
            
        cy.contains('type').click()
        cy.url()
        .should('include','/commands/actions')
        cy.get('.action-email')
        .type('user@email.com')
        .should('have.value','user@email.com')
    })
})