describe('my first test',function(){
    it('verify title of page',function(){
        cy.visit('https://www.youtube.com/')
    })
    it('play video',function(){
        cy.get('#search').type('skan ft.mime')
        cy.get('#search-icon-legacy').click()
        cy.get('#dismissable').click()
    })
    it('login senario',function(){

       

        cy.get('.style-scope>.ytd-button-renderer>.style-suggestive>.size-small').click()
        cy.get('#identifierId')
        .type('shoziramay6@gmailmail.com')
    })
    it('login ',function(){
        
        cy.get('#identifierNext>.VfPpkd-dgl2Hf-ppHlrf-sM5MNb>.VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ>.VfPpkd-LgbsSe-OWXEXe-dgl2Hf>.nCP5yc>.AjY5Oe>.DuMIQc>.qIypjc>.TrZEUc>.lw1w4b').click()
        cy.get('.aXBtI Wic03c>.Xb9hP>.whsOnd zHQkBf')
        .type('shozi1212')
        cy.get('#passwordNext>.VfPpkd-dgl2Hf-ppHlrf-sM5MNb>.VfPpkd-LgbsSe>.VfPpkd-LgbsSe-OWXEXe-k8QpJ>.VfPpkd-LgbsSe-OWXEXe-dgl2Hf>.nCP5yc>.AjY5Oe>.DuMIQc>.qIypjc>.TrZEUc>.lw1w4b')
    })
    
})