class Homepage {
      getSearchBar(){
        return cy.get('input[placeholder="Search Amazon"]')
      }
      getFirstSuggestedOptn(){
        return cy.get(':nth-child(1) > .s-suggestion-container > .s-suggestion')
      }
      getNxtPage(){
        return cy.get('.a-carousel-goto-nextpage')
      }
      getDismiss(){
        return cy.get('input[data-action-type="DISMISS"]')
      }
      getSrchSubmit(){
        return cy.get('input#nav-search-submit-button')
      }
      getPaiginatnNxt(){
        return cy.get('.s-pagination-next')
      }
      getPaiginatnBck(){
        return cy.get('.s-pagination-previous')
      }
      getBrands(){
        return cy.contains('Brands')
      }
      getProductDescBfrFilter(){
        return cy.contains('Amazon Basics Low-Profile Wired USB Keyboard with US Layout (QWERTY), Matte Black')
      }
      getProductDescAfrFilter(){
        return cy.contains('Logitech')
      }
      getAmazonLogo(){
        return cy.get('#nav-logo-sprites')
      }
      getAddtoCart(){
        return cy.contains('Add to cart') 
      }
      getItemAddedtoast(){
        return cy.get('.a-changeover .a-changeover-inner')
      }
      getCartIcon(){
        return cy.get('.nav-cart-icon')
      }
      getEmptyCartTxt(){
        return cy.get('.a-row > h2')
      }
      getCartCount(){
        return cy.get('#nav-cart-count')
      }
      getCartitem(){
        return cy.get('.a-truncate-cut') 
      }
      getEmailfield(){
        return cy.get('#ap_email')
      }
      getPassword(){
        return cy.get('#ap_password')
      }
      getSignInBtn(){
        return cy.get('#signInSubmit')
      }
      getCont(){
        return cy.get('.a-button-inner > #continue')
      }
}
export default Homepage;