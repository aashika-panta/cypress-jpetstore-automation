import { cartSelector } from "../support/selector";
describe("Add to cart functionality", () => {
  beforeEach(() => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("failed " + this.currentTest.title);
    } else {
      cy.log("passed " + this.currentTest.title);
    }
  });
  it("verify user should add aproduct to the cart", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();

    cy.get("body").should("contain.text", "Shopping Cart");
  });

  it("verify user should add aproduct to the cart", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();

    cy.xpath(cartSelector.returnToMainMenu).click();

    cy.xpath(cartSelector.reptiles).click();
    cy.xpath(cartSelector.reptileProduct).click();
    cy.xpath(cartSelector.reptileAddToCart).click();

    cy.get("body").should("contain.text", "EST-11");
  });

  it("verify user should remove product from the cart", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();

    cy.xpath(cartSelector.cart).click();

    cy.xpath(cartSelector.removeProduct).click();

    cy.get("body").should("not.contain.text", "EST-1");
  });

  it("verify user should increase product quantity", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();

    cy.xpath(cartSelector.cart).click();

    cy.get(cartSelector.quantity).clear();
    cy.get(cartSelector.quantity).type("2");
    cy.get(cartSelector.updateCart).click();

    cy.get(cartSelector.quantity).should("have.value", "2");
  });

  it("verify user should decrease product quantity", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();

    cy.xpath(cartSelector.cart).click();

    cy.get(cartSelector.quantity).clear();
    cy.get(cartSelector.quantity).type("1");
    cy.get(cartSelector.updateCart).click();

    cy.get("body").should("contain.text", "EST-1");
  });
  it("verify user handle neg product quantity", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();

    cy.xpath(cartSelector.cart).click();

    cy.get(cartSelector.quantity).clear();
    cy.get(cartSelector.quantity).type("-1");
    cy.get(cartSelector.updateCart).click();

    cy.get("body").should("not.contain.text", "EST-1");
  });

  it("verify user should enter 0 product quantity", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();

    cy.xpath(cartSelector.cart).click();

    cy.get(cartSelector.quantity).clear();
    cy.get(cartSelector.quantity).type("0");
    cy.get(cartSelector.updateCart).click();

    cy.get("body").should("not.contain.text", "EST-1");
  });

  it("verify user should non numeric product quantity", () => {
    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();

    cy.xpath(cartSelector.FishaddToCart).click();

    cy.xpath(cartSelector.cart).click();

    cy.get(cartSelector.quantity).clear().type("abc");
    cy.get(cartSelector.updateCart).click();

    cy.get("body").should("not.contain.text", "abc");
  });
});
