import Homepage from "../pageObjects/Homepage";
import jsonData from "../fixtures/jsonData.config.json"

const homePage = new Homepage();
const productName = jsonData.productName
const partialProdName = jsonData.partialProductName
const searchQuery = jsonData.searchQuery
const pageTitle = jsonData.pageTitle
const firstProductDeets = jsonData.firstProductDeets
const product2 = jsonData.productName2
const Email = jsonData.Email
const Password = jsonData.password


// Command for searching with a valid product name
Cypress.Commands.add('searchWithValidProduct', () => {

        homePage.getDismiss().click();
        cy.contains('Gaming accessories').should('exist')
        homePage.getSearchBar().type(productName);
        cy.wait(5000)
        homePage.getSrchSubmit().click()
        cy.wait(6000)
        // Other products are not visible after search is completed
        cy.contains('Gaming accessories').should('not.exist')
});

Cypress.Commands.add('searchWithPartialName', () => {
  homePage.getSearchBar().clear().type(partialProdName);
  cy.wait(5000)
  homePage.getSrchSubmit().click()
  cy.wait(5000)
  cy.title().should('include', 'Amazon.com : Key');
});

// //Command for No Results Search
// Cypress.Commands.add('searchWithNoResults', (nonExistentProduct) => {
//   cy.visit('/search');
//   cy.get('input[placeholder="Search Amazon"]').type(nonExistentProduct);
//   cy.get('button[type="submit"]').click();
//   cy.url().should('include', `search?query=${nonExistentProduct}`);
//   cy.get('.no-results-message').should('contain', 'No products found');
// });

//Command for Special Characters in Search
Cypress.Commands.add('searchWithSpecialCharacters', () => {
  homePage.getSearchBar().clear().type(searchQuery);
  cy.wait(5000)
  homePage.getSrchSubmit().click()
  cy.contains('Amazon.com Gift Card Claim Codes')
});

//Command for Case Sensitivity in Search
Cypress.Commands.add('searchWithCaseInsensitive', () => {
  homePage.getSearchBar().clear().type(productName.toUpperCase());
  cy.wait(5000)
  homePage.getSrchSubmit().click();
  //cy.title().should('include', 'Amazon.com : gift c@rd$KEYBOARD');
  cy.contains(productName);
});

// Command for Leading and Trailing Spaces
Cypress.Commands.add('searchWithSpaces', () => {
  const queryWithSpaces = `   ${productName}   `;
  homePage.getSearchBar().clear().type(queryWithSpaces);
  homePage.getSrchSubmit().click();
  cy.contains(productName).should('exist');
});

//Command for Empty Query
Cypress.Commands.add('searchWithEmptyQuery', () => {
  homePage.getSearchBar().clear().clear(); 
  homePage.getSrchSubmit().click();
  cy.title().should('eq', pageTitle);
});

//Command for Search Results Pagination
Cypress.Commands.add('searchWithPagination', () => {
  homePage.getSearchBar().type(productName);
  homePage.getSrchSubmit().click();
  cy.contains(firstProductDeets)
  homePage.getPaiginatnNxt().should('have.text', 'Next').click()
});

//Command for Filtered Results
Cypress.Commands.add('searchWithFiltersVerifyResults', () => {
  
  homePage.getSearchBar().clear().type(productName);
  homePage.getSrchSubmit().click();
  cy.wait(6000)
  homePage.getProductDescBfrFilter().should('exist')
  cy.get('#a-autoid-1 > .a-button-inner > .a-icon').click({force: true})
  homePage.getBrands().click({force: true})
  cy.wait(6000)
  cy.contains('Logitech').click({force: true})
  //homePage.getProductDescBfrFilter().should('not.exist')
  homePage.getProductDescAfrFilter().should('exist')
});

Cypress.Commands.add('AddtoCart', () => {
  // Check that cart is empty
  cy.contains('Cart').click()
  cy.wait(5000)
  homePage.getEmptyCartTxt()
  .invoke('text')
  .should(text => {
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    expect(cleanedText).to.include('Your Amazon Cart is empty');
  });

  //Add an item to Cart 
  homePage.getAmazonLogo().click()
  homePage.getSearchBar().clear().type(product2)
  homePage.getSrchSubmit().click()
  cy.wait(4000)
  homePage.getDismiss().click()

  //Check Cart count is 0
  homePage.getCartCount().should('have.text', '0')
  .and('be.visible');  
  homePage.getAddtoCart().click()
  homePage.getItemAddedtoast().should('be.visible').and('contain.text', 'Item Added')
  
   //Check Cart count is 0
   homePage.getCartCount().should('have.text', '1')
   .and('be.visible');  

  homePage.getCartIcon().click(({force: true}))
  cy.wait(5000)

  //Check that the item is in cart
  homePage.getEmptyCartTxt()
  .invoke('text')
  .should(text => {
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    expect(cleanedText).to.not.include('Your Amazon Cart is empty');
  });
  homePage.getCartitem().should('exist').and('contain', 'Amazon Fire TV 55" Omni QLED Series 4K UHD smart TV, Dolby')
})  

Cypress.Commands.add('Checkout', () => {

   // Proceed to checkout
  cy.contains('Proceed to checkout').click()
  homePage.getEmailfield().type(Email)
  homePage.getCont().click()
  homePage.getPassword().type(Password)
  homePage.getSignInBtn().click()
  cy.wait(7000)
})