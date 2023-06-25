/// <reference types="Cypress"/>
describe('this is for test automation store test', () => {
  
    it('just for practise', () => {
       cy.visit("https://automationteststore.com/");
      cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=4"]').click()
        cy.get('.container-fluid').contains("Shipping").click().then(
            function(ele){
            console.log(ele.text()+" has been clicked")
            
            }
            
            )

            cy.get('.active').contains("Home").click()
            
            cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
            cy.get('.container-fluid').contains("Contact Us").click().then(
                function(ele){
                console.log(ele.text()+" has been clicked")
                
                }
                
                )
    
                cy.get('.active').contains("Home").click()
                
                cy.get('a[href="https://automationteststore.com/index.php?rt=content/sitemap"]').click()
                cy.get('.container-fluid').contains("Site Map").click().then(
                    function(ele){
                    console.log(ele.text()+" has been clicked")
                    
                    }
                    
                    )
        
                    cy.get('.active').contains("Home").click()
    





       

    });
   
});