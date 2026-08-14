describe("Add to cart functionality ", () => {
  beforeEach(() => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");

  });

  it("verify user should add aproduct to the cart", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[2]/td[5]/a[1]").click();
    cy.get("body").should("contain.text", "Shopping Cart");
  });
  it("verify user should add aproduct to the cart", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[3]/td[5]/a[1]").click();
    cy.xpath("//a[normalize-space()='Return to Main Menu']").click();
    cy.xpath("//img[@src='../images/sm_reptiles.gif']").click();
    cy.xpath("//a[normalize-space()='RP-SN-01']").click();
    cy.xpath("//tbody/tr[2]/td[5]/a[1]").click();
    cy.get("body").should("contain.text", "EST-11");
  });

  it("verify user should remove product from the cart", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[3]/td[5]/a[1]").click();
    cy.xpath("//img[@name='img_cart']").click();
    cy.xpath(
      "/html[1]/body[1]/div[2]/div[2]/div[1]/form[1]/table[1]/tbody[1]/tr[2]/td[8]/a[1]",
    ).click();
    cy.get("body").should("not.contain.text", "EST-1");
  });

  it("verify user should increase product quantity", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[3]/td[5]/a[1]").click();
    cy.xpath("//img[@name='img_cart']").click();
    cy.get('[name ="EST-1"]').clear();
    cy.get('[name ="EST-1"]').type("2");
    cy.get('[name ="updateCartQuantities"]').click();
    cy.get('[name="EST-1"]').should("have.value", "2");
  });
  it("verify user should decrease product quantity", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[3]/td[5]/a[1]").click();
    cy.xpath("//img[@name='img_cart']").click();
    cy.get('[name ="EST-1"]').clear();
    cy.get('[name ="EST-1"]').type("1");
    cy.get('[name ="updateCartQuantities"]').click();
    cy.get("body").should("contain.text", "EST-1");
  });
  it("verify user should decrease to neg product quantity", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[3]/td[5]/a[1]").click();
    cy.xpath("//img[@name='img_cart']").click();
    cy.get('[name ="EST-1"]').clear();
    cy.get('[name ="EST-1"]').type("-1");
    cy.get('[name ="updateCartQuantities"]').click();
    cy.get("body").should("not.contain.text", "EST-1");
  });
  it("verify user should enter 0 product quantity", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[3]/td[5]/a[1]").click();
    cy.xpath("//img[@name='img_cart']").click();
    cy.get('[name ="EST-1"]').clear();
    cy.get('[name ="EST-1"]').type("0");
    cy.get('[name ="updateCartQuantities"]').click();
    cy.get("body").should("not.contain.text", "EST-1");
  });
  it("verify user should non numeric product quantity", () => {
    cy.xpath("//img[@src='../images/sm_fish.gif']").click();
    cy.xpath("//a[normalize-space()='FI-SW-01']").click();
    cy.xpath("//tbody/tr[3]/td[5]/a[1]").click();
    cy.xpath("//img[@name='img_cart']").click();
    cy.get('[name ="EST-1"]').clear().type("abc");
    cy.get('[name ="updateCartQuantities"]').click();
    cy.get("body").should("not.contain.text", "abc");
  });
});
