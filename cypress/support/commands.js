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
import { loginSelector, selector } from "./selector";
Cypress.Commands.add("login",() => {
  cy.xpath(loginSelector.enter_store).click();
  cy.xpath(loginSelector.sign_in).click();
  cy.get(loginSelector.username_field).type(Cypress.env("USERNAME"));
  cy.get(loginSelector.password_field).clear().type(Cypress.env("PASSWORD"));
  cy.get(loginSelector.login_button).click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
