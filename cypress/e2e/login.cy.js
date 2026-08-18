import { loginSelector } from "../support/selector";

describe("validate login functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.log("Test execution  completed ");
  });
  //test cases

  it("Verify login with valid credential", () => {
    cy.login();
    cy.get("body").should("contain.text", "aashika");
    cy.log("logged in with valid credential");
  });

  it("Verify login with invalid credential", () => {
    cy.xpath(loginSelector.enter_store).click();
    cy.xpath(loginSelector.sign_in).click();
    cy.get(loginSelector.username_field).type("aa");
    cy.get(loginSelector.password_field).clear().type("56789");
    cy.get(loginSelector.login_button).click();
    cy.get("body").should("contain.text", "Invalid");
    cy.log("login failed with invalid credential");
  });

  it("Vverify login with empty credential", () => {
    cy.xpath(loginSelector.enter_store).click();
    cy.xpath(loginSelector.sign_in).click();
    cy.get(loginSelector.username_field);
    cy.get(loginSelector.password_field).clear();
    cy.get(loginSelector.login_button).click();
    cy.get("body").should("not.contain.text", "welcome");
    cy.log("username and password should not be empty");
  });

  it("Verify logout with valid user", () => {
    cy.xpath(loginSelector.enter_store).click();
    cy.xpath(loginSelector.sign_in).click();
    cy.get(loginSelector.username_field).type("aaa");
    cy.get(loginSelector.password_field).clear().type("123456789");
    cy.get(loginSelector.login_button).click();
    cy.contains("Sign Out").click();
    cy.get("body").should("contain.text", "Sign In");
    cy.log("logout");
  });
});
