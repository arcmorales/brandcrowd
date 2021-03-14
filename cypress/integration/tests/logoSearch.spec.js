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
        cy.get('[data-toggle="filter-bar__more filter-bar__more-button filter-bar__less-button"]').click()
        cy.get('[data-test-business-name-search-results]').should('be.visible')
        cy.get('[data-test-keyword-search]').should('be.visible')
        cy.get('[data-test-logo-style-search]').should('be.visible')
        cy.get('[data-test-font-style-filter]').should('be.visible')
        cy.get('#colors-dropdown').should('be.visible')
        cy.get('[data-toggle="filter-bar__more filter-bar__more-button filter-bar__less-button"]').click()
    });

    it('should search for logos based on filter', () => {
        cy.get('[data-toggle="filter-bar__more filter-bar__more-button filter-bar__less-button"]').click()
        cy.get('[data-test-business-name-search-results]').type(searchTerms.business)
        cy.get('[data-test-keyword-search]').type(searchTerms.keyword)
        cy.get('[data-test-logo-style-search]').select(searchTerms.style)
        cy.get('[data-test-font-style-filter]').click()
        cy.get('[data-test-font-style-filter] input[type="checkbox"]').check(searchTerms.font, { scrollBehavior: 'center', force: true })
        cy.get('#colors-dropdown input[type="checkbox"]').check(searchTerms.color, { scrollBehavior: 'center', force: true })
        cy.get('[data-test-create-logos-btn]').click()
        cy.get('[data-test-logo-design-images]').should('have.length.at.least', 1)
            .each($searchResult => {
                expect($searchResult).to.have.attr('src').to.contain(searchTerms.business)
            })
    })
})