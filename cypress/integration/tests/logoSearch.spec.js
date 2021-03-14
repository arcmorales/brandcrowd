import screenSize from '../../fixtures/viewports.json'
import searchTerms from '../../fixtures/search.json'

describe('BrandCrowd Logo search form', () => {
    before(() => {
        cy.visit(Cypress.env('logoMaker_url'))
    });

    beforeEach(() => {
        cy.viewport(screenSize.desktop.width, screenSize.desktop.height)
    });

    it('should load the logo search form', () => {
        cy.get('.logo-search-bar > #search-form').should('be.visible')
    })

    it('should display logo filter options', () => {
        cy.toggleFilter()
        cy.get('[data-test-business-name-search-results]').should('be.visible')
        cy.get('[data-test-keyword-search]').should('be.visible')
        cy.get('[data-test-logo-style-search]').should('be.visible')
        cy.get('[data-test-font-style-filter]').should('be.visible')
        cy.get('#colors-dropdown').should('be.visible')
        cy.toggleFilter()
    });

    it('should search for logos based on filter', () => {
        cy.logoSearch(searchTerms.business, searchTerms.keyword, searchTerms.style, searchTerms.font, searchTerms.color)
        cy.get('[data-test-logo-design-images]').should('have.length.at.least', 1)
            .each($searchResult => {
                expect($searchResult).to.have.attr('src').to.contain(searchTerms.business)
                expect($searchResult).to.have.attr('alt').to.contain(searchTerms.keyword)
            })
    })
})