import { cartSelector, checkout } from "../support/selector";

describe("Jpetstore checkout functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login();

    cy.xpath(cartSelector.fish).click();
    cy.xpath(cartSelector.fishProduct).click();
    cy.xpath(cartSelector.FishaddToCart).click();
    cy.xpath(checkout.checkoutprocess).click();

    cy.xpath(cartSelector.cart).click();
    cy.xpath(checkout.checkoutprocess).click();
  });

  it("Verify users can checkout successfully", () => {
    cy.get(checkout.cardtype).select("Visa");
    cy.get(checkout.cardnumber).clear().type("999 9999 9999 9999");
    cy.get(checkout.expirydate).clear().type("12/03");
    cy.get(checkout.first_name).clear().type("aashika");
    cy.get(checkout.last_name).clear().type("panta");
    cy.get(checkout.Address1).clear().type("ktm");
    cy.get(checkout.Address2).clear().type("ctn");
    cy.get(checkout.city).clear().type("ctn");
    cy.get(checkout.state).clear().type("asdf");
    cy.get(checkout.Zip).clear().type("44567");
    cy.get(checkout.Country).clear().type("nepal");
    cy.xpath(checkout.continue).click();
    cy.xpath(checkout.confirm).click();

    cy.get("body").should(
      "contain.text",
      "Thank you, your order has been submitted",
    );
  });

  it("Verify checkout should not proceed with empty first name", () => {
    cy.get(checkout.cardtype).select("Visa");
    cy.get(checkout.cardnumber).clear().type("999 9999 9999 9999");
    cy.get(checkout.expirydate).clear().type("12/03");

    cy.get(checkout.first_name).clear();

    cy.get(checkout.last_name).clear().type("panta");
    cy.get(checkout.Address1).clear().type("ktm");
    cy.get(checkout.city).clear().type("ctn");
    cy.get(checkout.state).clear().type("asdf");
    cy.get(checkout.Zip).clear().type("44567");
    cy.get(checkout.Country).clear().type("nepal");

    cy.xpath(checkout.continue).click();

    cy.get("body").should(
      "not.contain.text",
      "Thank you, your order has been submitted",
    );
  });

  it("Verify checkout should not proceed with empty card number", () => {
    cy.get(checkout.cardtype).select("Visa");

    cy.get(checkout.cardnumber).clear();

    cy.get(checkout.expirydate).clear().type("12/03");
    cy.get(checkout.first_name).clear().type("aashika");
    cy.get(checkout.last_name).clear().type("panta");
    cy.get(checkout.Address1).clear().type("ktm");
    cy.get(checkout.city).clear().type("ctn");
    cy.get(checkout.state).clear().type("asdf");
    cy.get(checkout.Zip).clear().type("44567");
    cy.get(checkout.Country).clear().type("nepal");
    cy.xpath(checkout.continue).click();
    cy.get("body").should(
      "not.contain.text",
      "Thank you, your order has been submitted",
    );
  });

  it("Verify checkout should not proceed with empty last name", () => {
    cy.get(checkout.cardtype).select("Visa");
    cy.get(checkout.cardnumber).clear().type("999 9999 9999 9999");
    cy.get(checkout.expirydate).clear().type("12/03");
    cy.get(checkout.first_name).clear().type("aashika");

    cy.get(checkout.last_name).clear();

    cy.get(checkout.Address1).clear().type("ktm");
    cy.get(checkout.city).clear().type("ctn");
    cy.get(checkout.state).clear().type("asdf");
    cy.get(checkout.Zip).clear().type("44567");
    cy.get(checkout.Country).clear().type("nepal");

    cy.xpath(checkout.continue).click();

    cy.get("body").should(
      "not.contain.text",
      "Thank you, your order has been submitted",
    );
  });

  it("Verify checkout accepts alphabetic zip code", () => {
    cy.get(checkout.cardtype).select("Visa");
    cy.get(checkout.cardnumber).clear().type("999 9999 9999 9999");
    cy.get(checkout.expirydate).clear().type("12/03");
    cy.get(checkout.first_name).clear().type("aashika");
    cy.get(checkout.last_name).clear().type("panta");
    cy.get(checkout.Address1).clear().type("ktm");
    cy.get(checkout.city).clear().type("ctn");
    cy.get(checkout.state).clear().type("asdf");

    cy.get(checkout.Zip).clear().type("abc");

    cy.get(checkout.Country).clear().type("nepal");
    cy.xpath(checkout.continue).click();

    cy.get("body").should(
      "not.contain.text",
      "Thank you, your order has been submitted",
    );
  });

  it("Verify checkout should not proceed with empty address", () => {
    cy.get(checkout.cardtype).select("Visa");
    cy.get(checkout.cardnumber).clear().type("999 9999 9999 9999");
    cy.get(checkout.expirydate).clear().type("12/03");
    cy.get(checkout.first_name).clear().type("aashika");
    cy.get(checkout.last_name).clear().type("panta");
    cy.get(checkout.Address1).clear();
    cy.get(checkout.city).clear().type("ctn");
    cy.get(checkout.state).clear().type("asdf");
    cy.get(checkout.Zip).clear().type("44567");
    cy.get(checkout.Country).clear().type("nepal");
    cy.xpath(checkout.continue).click();
    cy.get("body").should(
      "not.contain.text",
      "Thank you, your order has been submitted",
    );
  });

  it("Verify checkout should not proceed with empty country", () => {
    cy.get(checkout.cardtype).select("Visa");
    cy.get(checkout.cardnumber).clear().type("999 9999 9999 9999");
    cy.get(checkout.expirydate).clear().type("12/03");
    cy.get(checkout.first_name).clear().type("aashika");
    cy.get(checkout.last_name).clear().type("panta");
    cy.get(checkout.Address1).clear().type("ktm");
    cy.get(checkout.city).clear().type("ctn");
    cy.get(checkout.state).clear().type("asdf");
    cy.get(checkout.Zip).clear().type("44567");
    cy.get(checkout.Country).clear();
    cy.xpath(checkout.continue).click();
    cy.get("body").should(
      "not.contain.text",
      "Thank you, your order has been submitted",
    );
  });
  
});
