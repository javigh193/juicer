describe('template spec', () => {

  // Disable Cypress uncaught exception failures from React hydration errors
  Cypress.on('uncaught:exception', (err) => {
    console.log("Here is the err.message:" + err.message)
    if (
      err.message.includes("Hydration failed because the server rendered HTML didn't match the client.")
    ) {
      return false;
    }
    // Enable uncaught exception failures for other errors
  })

  it('passes', () => {
    cy.visit(Cypress.env('local_url'))
    console.log(process.env)
  })

  // Re-enable Cypress uncaught exception failures from React hydration errors
  Cypress.on('uncaught:exception', () => {})
})