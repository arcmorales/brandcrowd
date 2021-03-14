// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('logoSearch', (business, keyword, style, font, color) => {
    cy.get('[data-toggle="filter-bar__more filter-bar__more-button filter-bar__less-button"]').click()
    cy.get('[data-test-business-name-search-results]').type(business)
    cy.get('[data-test-keyword-search]').type(keyword)
    cy.get('[data-test-logo-style-search]').select(style)
    cy.get('[data-test-font-style-filter]').click()
    cy.get('[data-test-font-style-filter] input[type="checkbox"]').check(font, { scrollBehavior: 'center', force: true })
    cy.get('#colors-dropdown input[type="checkbox"]').check(color, { scrollBehavior: 'center', force: true })
    cy.get('[data-test-create-logos-btn]').click()
})

Cypress.Commands.add('toggleFilter', () => {
    cy.get('[data-toggle="filter-bar__more filter-bar__more-button filter-bar__less-button"]').click()
})
