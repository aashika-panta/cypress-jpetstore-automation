import { loginSelector, account, selector } from "../support/selector";

describe("My Account features", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });

  it("Verify account information can display", () => {
    cy.xpath(account.myaccount).should("be.visible").click();
    cy.get("body").should("contain.text", "User Information");
  });
  it("Verify existing account information", () => {
    cy.xpath(account.myaccount).should("be.visible").click();
    cy.get(account.firstName).should("contain.value", "aashika");
    cy.get(account.lastName).should("contain.value", "panta");
    cy.get(account.email).should("contain.value", "aaa@gmail.com");
  });

  it("Verify user can update account information", () => {
    cy.xpath(account.myaccount).should("be.visible").click();
    cy.get(account.address1).clear().type("Kathmandu");
    cy.get(account.Edit).click();
    cy.get(account.address1).should("have.value", "Kathmandu");
  });
  it("Verify user can update email", () => {
    cy.xpath(account.myaccount).click();
    cy.get(account.email).clear().type("newemail@gmail.com");
    cy.get(account.Edit).click();
    cy.get(account.email).should("have.value", "newemail@gmail.com");
  });
  it("Verify My Orders is displayed", () => {
    cy.xpath(account.myaccount).click();
    cy.get("body").should("contain.text","My Orders");
  });
});
