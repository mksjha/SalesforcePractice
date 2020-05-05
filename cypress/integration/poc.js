describe('Login Page', function() {
  it('Visit the salesforce', function() {

    cy.exec('sfdx force:org:display --json | sed -E "s/[[:cntrl:]][[0-9]{1,3}m//g"')
    .then((response) => {
        let result = JSON.parse(response.stdout).result;
        let sessionId = result.accessToken;
        let instanceUrl = result.instanceUrl;

        cy.request(`${instanceUrl}/secur/frontdoor.jsp?sid=${sessionId}`)
        cy.visit(`${instanceUrl}/lightning/o/Account/list?filterName=00B2w000006DY5LEAW`)
    })
     //cy.visit('https://mksjha-dev-ed.lightning.force.com/lightning/o/Account/list?filterName=00B2w000006DY7nEAG')
    
     .get('.forceOutputLookup', {timeout: 10000}).contains('Burlington Textiles Corp of America').click()
    
    cy.shadowGet('one-record-home-flexipage2')
    .shadowFind('forcegenerated-flexipage_account_record_page_account__view_js')
    .shadowFind('flexipage-record-page-decorator')
    .shadowFind('flexipage-record-home-three-col-template-desktop2')
    .shadowFind('flexipage-record-home-scrollable-column')
    .shadowFind('flexipage-component2')
    .shadowFind('c-first')
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-input-field')
    .shadowFind('lightning-input')
    .shadowFind('input[name="Name"]')
    
    .shadowType('Browser') 
    
    
    
   cy.shadowGet('one-record-home-flexipage2')
    .shadowFind('forcegenerated-flexipage_account_record_page_account__view_js')
    .shadowFind('flexipage-record-page-decorator')
    .shadowFind('flexipage-record-home-three-col-template-desktop2')
    .shadowFind('flexipage-record-home-scrollable-column')
    .shadowFind('flexipage-component2')
    .shadowFind('c-first')
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-input-field')
    .shadowFind('lightning-input')
    .shadowFind('input[name="Website"]')
    .shadowType('Browser website') 
    
  //  cy.shadowGet('one-record-home-flexipage2')
  //   .shadowFind('forcegenerated-flexipage_account_record_page_account__view_js')
  //   .shadowFind('flexipage-record-page-decorator')
  //   .shadowFind('flexipage-record-home-three-col-template-desktop2')
  //   .shadowFind('flexipage-record-home-scrollable-column')
  //   .shadowFind('flexipage-component2')
  //   .shadowFind('c-first')
  //   .shadowFind('lightning-record-edit-form')
  //   .shadowFind('lightning-input-field')
  //   .shadowFind('lightning-textarea')
  //   .shadowFind('textarea[name="Description"]')
  //   .shadowType('Browser desc') 
    
    cy.shadowGet('one-record-home-flexipage2')
    .shadowFind('forcegenerated-flexipage_account_record_page_account__view_js')
    .shadowFind('flexipage-record-page-decorator')
    .shadowFind('flexipage-record-home-three-col-template-desktop2')
    .shadowFind('flexipage-record-home-scrollable-column')
    .shadowFind('flexipage-component2')
    .shadowFind('c-first')
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-button')
    .shadowFind('button[type="submit"]')
    .shadowClick({ force: true });

  })

})



