describe("validate login functionality", () => {
  it("verify login with valid credential", () => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();
    cy.get('[name="username"]').type("aaa");
    cy.get('[name="password"]').clear().type("123456789");
    cy.get('[name ="signon"]').click();
    cy.get("body").should("contain.text", "aashika");
    cy.log("logged in with valid credential");
  });
  it("verify login with invalid credentail", () => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();
    cy.get('[name="username"]').type("aa");
    cy.get('[name="password"]').clear().type("56789");
    cy.get('[name ="signon"]').click();
    cy.get("body").should("contain.text", "Invalid");
    cy.log("logged in failed with invalid credential");
  });
  it("verify login with empty credentail", () => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();
    cy.get('[name="username"]');
    cy.get('[name="password"]').clear();
    cy.get('[name ="signon"]').click();
    cy.get("body").should("not.contain.text", "welcome");
    cy.log("username and password should not be empty");
  });
  it("verify logout with valid user", () => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click();
    cy.get('[name="username"]').type("aaa");
    cy.get('[name="password"]').clear().type("123456789");
    cy.get('[name ="signon"]').click();
    cy.contains("Sign Out").click();
    cy.get("body").should("contain.text", "Sign In");
    cy.log("logout");
  });
});
//user-aaa
//password=123456789
