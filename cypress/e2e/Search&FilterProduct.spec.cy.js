import jsonData from "../fixtures/jsonData.config.json";
import Homepage from "../pageObjects/Homepage";

const homePage = new Homepage();


describe('Clickatell', {
  viewportHeight: 1300,
  viewportWidth: 960,
}, () => {
  
  beforeEach(() => {
    const AmazonUrl = jsonData.Url;
    const pageTitle = jsonData.pageTitle;

    cy.visit(AmazonUrl); 
    cy.title().should('eq', pageTitle);
  });

  it('Search and Filter Products', () => {
    cy.searchWithValidProduct();
    cy.searchWithPartialName();
    cy.searchWithSpecialCharacters();
    cy.searchWithCaseInsensitive();
    cy.searchWithSpaces();
    cy.searchWithEmptyQuery();
    cy.searchWithPagination();
    cy.searchWithFiltersVerifyResults();
  });

  after(() => {
    homePage.homePage().click();
  });
  
});


