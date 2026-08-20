import { loginSelector, searchs } from "../support/selector";
describe(" jpet store search functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.xpath(loginSelector.enter_store).click();
  });

  it("Verify search with valid keyword", () => {
    cy.get(searchs.search).type("Fish");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text", "Goldfish");
  });

  it("Verify search with specific product", () => {
    cy.get(searchs.search).type("AngelFish");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text", "Angelfish");
  });

  it("Verify search with invalid keyword", () => {
    cy.get(searchs.search).type("smjchsh");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("be.visible");
  });

  it("Verify search with empty keyword", () => {
    cy.get(searchs.search);
    cy.get(searchs.searchproduct).click();
    cy.get("body").should(
      "contain.text",
      "Please enter a keyword to search for",
    );
  });

  it("Verify search with space", () => {
    cy.get(searchs.search).type("       ");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should(
      "contain.text",
      "Please enter a keyword to search for",
    );
  });

  it("Verify search with special character", () => {
    cy.get(searchs.search).type(" @#$%^& ");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("be.visible");
  });

  it("Verify search by pressing enter", () => {
    cy.get(searchs.search).type("Fish{enter}");
    cy.get("body").should("contain.text", "Goldfish");
  });

  it("Verify search with uppercase keyword", () => {
    cy.get(searchs.search).type("FISH");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text", "Goldfish");
  });

  it("Verify search with lowercase keyword", () => {
    cy.get(searchs.search).type("fish");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text", "Goldfish");
  });

  it("Verify search with partial product name", () => {
    cy.get(searchs.search).type("Gold");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text", "Goldfish");
    cy.get("body").should("contain.text", "Golden Retriever");
  });

  it("Verify search result contains product information", () => {
    cy.get(searchs.search).type("Fish");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text", "Goldfish");
    cy.get("body").should("contain.text", "Angelfish");
  });

  it("Verify search result contains product information", () => {
    cy.get(searchs.search).type("Fish");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text", "Goldfish");
    cy.get("body").should("contain.text", "Angelfish");
  });

  it("Verify search with percentages %", () => {
    cy.get(searchs.search).type("%");
    cy.get(searchs.searchproduct).click();
    cy.get("body").should("contain.text","Goldfish");
  });
});
 