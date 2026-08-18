import { faker } from "@faker-js/faker";
import { selector } from "../support/selector";

const email = faker.internet.email();

describe("Registration functionality", () => {
  const username = `aashika_${Date.now().toString().slice(-4)}`;

  beforeEach(() => {
    cy.visit(
      "https://petstore.octoperf.com/actions/Account.action?newAccountForm=",
    );
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("failed " + this.currentTest.title);
    } else {
      cy.log("passed " + this.currentTest.title);
    }
  });

  it("Verify user can register successfully", () => {
    cy.get(selector.username_field).type(username);
    cy.get(selector.password_field).type("Test@12345");
    cy.get(selector.repeatpassword).type("Test@12345");
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email).type(email);
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1).type("Kathmandu");
    cy.get(selector.address2).type("Kathmandu");
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("japanese");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("contain.text", "Sign In");
  });

  it("Verify user can register with empty Username", () => {
    cy.get(selector.username_field);
    cy.get(selector.password_field).type("Test@12345");
    cy.get(selector.repeatpassword).type("Test@12345");
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email).type(email);
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1).type("Kathmandu");
    cy.get(selector.address2).type("Kathmandu");
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("english");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("not.contain.text", "Username is required");
  });

  it("Verify user can register with mismatch password", () => {
    cy.get(selector.username_field).type(username);
    cy.get(selector.password_field).type("Test@12345");
    cy.get(selector.repeatpassword).type("Test12345");
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email).type(email);
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1).type("Kathmandu");
    cy.get(selector.address2).type("Kathmandu");
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("english");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("not.contain.text", "passsword do not match");
  });

  it("Verify user can register with invalid email", () => {
    cy.get(selector.username_field).type(username);
    cy.get(selector.password_field).type("Test@12345");
    cy.get(selector.repeatpassword).type("Test@12345");
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email).type("invalidemail123");
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1).type("Kathmandu");
    cy.get(selector.address2).type("Kathmandu");
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("english");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("not.contain.text", "Invalid email");
  });

  it("Verify user can register with empty password", () => {
    cy.get(selector.username_field).type(username);
    cy.get(selector.password_field);
    cy.get(selector.repeatpassword);
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email).type("aashika@gmail.com");
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1).type("Kathmandu");
    cy.get(selector.address2).type("Kathmandu");
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("english");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("not.contain.text", "password is required.");
  });

  it("Verify user can register with empty email", () => {
    cy.get(selector.username_field).type(username);
    cy.get(selector.password_field).type("Test@12345");
    cy.get(selector.repeatpassword).type("Test@12345");
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email);
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1).type("Kathmandu");
    cy.get(selector.address2).type("Kathmandu");
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("english");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("not.contain.text", "Email is required");
  });

  it("Verify user can register with duplicate email", () => {
    cy.get(selector.username_field).type(username);
    cy.get(selector.password_field).type("Test@12345");
    cy.get(selector.repeatpassword).type("Test@12345");
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email).type("ashika@gmail.com");
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1).type("Kathmandu");
    cy.get(selector.address2).type("Kathmandu");
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("english");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("not.contain.text", "Email already exixt");
  });

  it("Verify user can register with empty address", () => {
    cy.get(selector.username_field).type(username);
    cy.get(selector.password_field).type("Test@12345");
    cy.get(selector.repeatpassword).type("Test@12345");
    cy.get(selector.firstname).type("Aashka");
    cy.get(selector.lastname).type("Panta");
    cy.get(selector.email).type(email);
    cy.get(selector.phone).type("9812345678");
    cy.get(selector.address1);
    cy.get(selector.address2);
    cy.get(selector.city).type("Kathmandu");
    cy.get(selector.state).type("Bagmati");
    cy.get(selector.zip).type("44600");
    cy.get(selector.country).type("Nepal");
    cy.get(selector.languages).select("english");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.saveinformation).click();

    cy.get("body").should("not.contain.text", "Address is required");
  });
});