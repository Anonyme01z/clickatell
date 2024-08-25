import jsonData from "../fixtures/jsonData.config.json"
import Homepage from "../pageObjects/Homepage";

describe('Clickatell', {
  viewportHeight: 1300,
  viewportWidth: 960,
})

beforeEach(() => {
  const AmazonUrl = jsonData.Url;
  const pageTitle = jsonData.pageTitle;

  cy.visit(AmazonUrl); 
  cy.title().should('eq', pageTitle);
});


it('Add to Cart', () => {
    cy.AddtoCart();
    cy.Checkout();
})

