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
        cy.get('button[data-toggle="filter-bar__more filter-bar__more-button filter-bar__less-button"]').click()
        cy.get('select#LogoStyle').should('be.visible')
        cy.get('#font-styles-dropdown').should('be.visible')
        cy.get('#colors-dropdown').should('be.visible')
    });

    it('should search for logo based on filter', () => {
        cy.get('#search-form input#gtm-SearchText[type="text"]').type(searchTerms.business)
        cy.get('#search-form input#SearchText[type="text"]').type(searchTerms.keyword)
        cy.get('select#LogoStyle').select(searchTerms.style)
        cy.get('#font-styles-dropdown').click()
        cy.get('#font-styles-dropdown input[type="checkbox"]').check(searchTerms.font, { scrollBehavior: 'center', force: true })
        cy.get('#colors-dropdown input[type="checkbox"]').check('blue', { scrollBehavior: 'center', force: true })
        cy.get('#search-form button[data-test-create-logos-btn]').click()
        cy.get('.card-design img[data-test-logo-design-images]').should('have.length.at.least', 1)
            .each($searchResult => {
                expect($searchResult).to.have.attr('src').to.contain(searchTerms.business)
            })
    })
})