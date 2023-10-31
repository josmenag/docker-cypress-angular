describe("My First Test", () => {
  it.only("should find the h2 using localhost", () => {
    // Use the custom command to wait for the application to be ready
    //   cy.waitForAppToBeReady();

    //cy.wait(10000);

    cy.visit("http://localhost:4200");

    // Use the `retry` option to retry this command
    cy.get("h2").should("be.visible").contains("Resources");
  });

  it.only("should find the h2 using my-app", () => {
    // Use the custom command to wait for the application to be ready
    //   cy.waitForAppToBeReady();

    //cy.wait(10000);

    cy.visit("http://my-app:4200");

    cy.wait(60000);
    // Use the `retry` option to retry this command
    cy.get("h2").should("be.visible").contains("Resources");
  });

  it("should visit Google", () => {
    // Visit Google
    cy.visit("https://www.google.com");

    // Check for an element on Google's page
    // For example, checking for the search input
    cy.get('input[name="q"]').should("be.visible");
  });
});
