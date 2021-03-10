describe('my first test',function(){
    it('verify title of page',function(){
        cy.visit('https://www.facebook.com/')
        //cy.title().should('eq','Facebook')
    })
    it('login senario',function(){

        
        cy.get('#email')
        .type('shoziramay11@yahoo.com')
        
        cy.get('#pass')
        .type('shozi1212')
        cy.get('#loginbutton').click()
    })

    it('signup senario',function(){
        cy.get('.signup_box_content>a').click()
        cy.get('#u_5_b_/1')
        .type('arslan')
        cy.get('.mbm _1iy_ _a4y rfloat _ohf>._5dbb>.uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput>.uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput>.inputtext _58mg _5dba _2ph-').type('ahmad')
    })
    
})