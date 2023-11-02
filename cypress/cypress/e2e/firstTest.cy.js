describe("My First Test", () => {
  it("should find the h2 using", () => {
    cy.visit("http://my-app:4200");

    // Use the `retry` option to retry this command
    cy.get("h2").should("be.visible").contains("Resources");
  });
});
