import { faker } from "@faker-js/faker";

const email = faker.internet.email();
describe("Registration functionality", () => {
  const username = `aashika_${Date.now().toString().slice(-4)}`;

  beforeEach(() => {
    cy.visit(
      "https://petstore.octoperf.com/actions/Account.action?newAccountForm=",
    );
  });

  afterEach(function() {
      if (this.currentTest.state === "failed") {
        cy.log(" failed" + this.currentTest.title);
      } else {
        cy.log("passed" + this.currentTest.title);
      
    }
  });
  it("verify user can register successfully", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type("Test@12345");
    cy.get('[name="repeatedPassword"]').type("Test@12345");
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]').type(email);
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]').type("Kathmandu");
    cy.get('[name="account.address2"]').type("Kathmandu");
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("japanese");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "Sign In");
  });

  it("verify user can register with empty Username", () => {
    cy.get('[name="username"]');
    cy.get('[name="password"]').type("Test@12345");
    cy.get('[name="repeatedPassword"]').type("Test@12345");
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]').type(email);
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]').type("Kathmandu");
    cy.get('[name="account.address2"]').type("Kathmandu");
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("english");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "Username is required");
  });

  it("verify user can register with mismatch password", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type("Test@12345");
    cy.get('[name="repeatedPassword"]').type("Test12345");
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]').type(email);
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]').type("Kathmandu");
    cy.get('[name="account.address2"]').type("Kathmandu");
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("english");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "passsword do not match");
  });

  it("verify user can register with invalid email", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type("Test@12345");
    cy.get('[name="repeatedPassword"]').type("Test@12345");
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]').type(invalidemail);
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]').type("Kathmandu");
    cy.get('[name="account.address2"]').type("Kathmandu");
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("english");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "Invalid email");
  });

  it("verify user can register with empty password", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]');
    cy.get('[name="repeatedPassword"]');
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]').type("aashika@gmail.com");
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]').type("Kathmandu");
    cy.get('[name="account.address2"]').type("Kathmandu");
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("english");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "password is required.");
  });

  it("verify user can register with empty email", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type("Test@12345");
    cy.get('[name="repeatedPassword"]').type("Test@12345");
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]');
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]').type("Kathmandu");
    cy.get('[name="account.address2"]').type("Kathmandu");
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("english");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "Email is required");
  });
    it("verify user can register with duplicate  email", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type("Test@12345");
    cy.get('[name="repeatedPassword"]').type("Test@12345");
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]').type("ashika@gmail.com");
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]').type("Kathmandu");
    cy.get('[name="account.address2"]').type("Kathmandu");
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("english");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "Email already exixt");
  });

  it("verify user can register with empty address", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type("Test@12345");
    cy.get('[name="repeatedPassword"]').type("Test12345");
    cy.get('[name="account.firstName"]').type("Aashka");
    cy.get('[name="account.lastName"]').type("Panta");
    cy.get('[name="account.email"]').type(email);
    cy.get('[name="account.phone"]').type("9812345678");
    cy.get('[name="account.address1"]');
    cy.get('[name="account.address2"]');
    cy.get('[name="account.city"]').type("Kathmandu");
    cy.get('[name="account.state"]').type("Bagmati");
    cy.get('[name="account.zip"]').type("44600");
    cy.get('[name="account.country"]').type("Nepal");
    cy.get('[name="account.languagePreference"]').select("english");
    cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
    cy.get('[name="newAccount"]').click();
    cy.get("body").should("contain.text", "Address is required");
  });
});
