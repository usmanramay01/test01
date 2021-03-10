describe('my amazon test',function(){
    it('verify title of page',function(){
        cy.visit('https://www.amazon.com/')
    })
    it('search',function(){
        cy.get('#twotabsearchtextbox').type('iphone 12 pro max')
        cy.get('#nav-search-submit-button').click()
        cy.get('aria-posinset.1').click()
    })

})