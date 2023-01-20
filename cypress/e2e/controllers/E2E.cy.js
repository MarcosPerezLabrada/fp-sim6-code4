describe('testing redirections when not logged', function () {

  it("testing security 1",()=> {
    cy.visit("/trails")
    cy.url().should("contain","google")
  })
  it("testing security 2",()=> {
    cy.visit("trails/new")
    cy.url().should("contain","google")
  })
  
})
