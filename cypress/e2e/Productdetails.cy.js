import { Fish, Dog, Cat, Reptile, Bird } from "../support/selector";

describe("Product details information", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });
  it("Verify the Fish Product details", () => {
    cy.xpath(Fish.fish).click();
    cy.xpath(Fish.fishProduct).click();

    cy.get("body").should("contain.text", "Angelfish");
    cy.get("body").should("contain.text", "FI-SW-01");
    cy.get("body").should("contain.text", "EST-1");
  });

  it("Verify the Fish Item details", () => {
    cy.xpath(Fish.fish).click();
    cy.xpath(Fish.fishProduct).click();
    cy.xpath(Fish.fishid).click();

    cy.get("body").should("contain.text", "EST-1");
    cy.get("body").should("contain.text", "Large");
    cy.get("body").should("contain.text", "Angelfish");
    cy.get("body").should("contain.text", "Back ordered.");
    cy.get("body").should("contain.text", "$16.50");
    cy.get("body").should("contain.text", "Add to Cart");
  });

  it("Verify user can add Fish item to cart", () => {
    cy.xpath(Fish.fish).click();
    cy.xpath(Fish.fishProduct).click();
    cy.xpath(Fish.fishid).click();

    cy.contains("Add to Cart").click();
    cy.get("body").should("contain.text", "Shopping Cart");
  });

  it("Verify the Dog Product details", () => {
    cy.xpath(Dog.dog).click();
    cy.xpath(Dog.dogProduct).click();

    cy.get("body").should("contain.text", "Bulldog");
    cy.get("body").should("contain.text", "K9-BD-01");
    cy.get("body").should("contain.text", "EST-6");
  });

  it("Verify the Dog Item details", () => {
    cy.xpath(Dog.dog).click();
    cy.xpath(Dog.dogProduct).click();
    cy.xpath(Dog.dogid).click();

    cy.get("body").should("contain.text", "EST-6");
    cy.get("body").should("contain.text", "Male Adult");
    cy.get("body").should("contain.text", "Bulldog");
    cy.get("body").should("contain.text", "$18.50");
    cy.get("body").should("contain.text", "Back ordered.");
    cy.get("body").should("contain.text", "Add to Cart");
  });

  it("Verify user can add Dog item to cart", () => {
    cy.xpath(Dog.dog).click();
    cy.xpath(Dog.dogProduct).click();
    cy.xpath(Dog.dogid).click();
    cy.contains("Add to Cart").click();

    cy.get("body").should("contain.text", "Shopping Cart");
  });
  it("Verify the Bird Product details", () => {
    cy.xpath(Bird.bird).click();
    cy.xpath(Bird.birdProduct).click();

    cy.get("body").should("contain.text", "Adult Male");
    cy.get("body").should("contain.text", "AV-CB-01");
    cy.get("body").should("contain.text", "EST-18");
  });

  it("Verify the Bird Item details", () => {
    cy.xpath(Bird.bird).click();
    cy.xpath(Bird.birdProduct).click();
    cy.xpath(Bird.birdid).click();
    cy.get("body").should("contain.text", "EST-18");
    cy.get("body").should("contain.text", "Adult Male");
    cy.get("body").should("contain.text", "Amazon Parrot");
    cy.get("body").should("contain.text", "Back ordered.");
    cy.get("body").should("contain.text", "$193.50");
    cy.get("body").should("contain.text", "Add to Cart");
  });

  it("Verify user can add Bird item to cart", () => {
    cy.xpath(Bird.bird).click();
    cy.xpath(Bird.birdProduct).click();
    cy.xpath(Bird.birdid).click();
    cy.contains("Add to Cart").click();
    cy.get("body").should("contain.text", "Shopping Cart");
  });
});
