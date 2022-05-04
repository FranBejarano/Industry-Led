describe('Generate data using Cypress testing tool', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('type a value for Custom Key field, selects the appropiate value for the custom key and add the value to the object container', () => {
        
        //First Name field
        cy.get('[id="custom-input"]').type('firstname');

        cy.get('[id="value-select-custom"]')
            .select('First Name');

        cy.get('[id="btn-add-custom"]')
            .click();

        //Last Name field
        cy.get('[id="custom-input"]').type('lastname');

        cy.get('[id="value-select-custom"]')
            .select('Last Name');

        cy.get('[id="btn-add-custom"]')
            .click();

        //Email field
        cy.get('[id="custom-input"]').type('email');

        cy.get('[id="value-select-custom"]')
            .select('Email');

        cy.get('[id="btn-add-custom"]')
            .click();

        //Address field
        cy.get('[id="custom-input"]').type('address');

        cy.get('[id="value-select-custom"]')
            .select('Address');

        cy.get('[id="btn-add-custom"]')
            .click();

        //Vehicle field
        cy.get('[id="custom-input"]').type('vehicle');

        cy.get('[id="value-select-custom"]')
            .select('Vehicle');

        cy.get('[id="select-key-drop-car-custom"]')
            .select('Car');

        cy.get('[id="btn-add-custom"]')
            .click();

        //Input the number of entries needed in the database
        cy.get('[id="entries-input"]').type('10)');

        //Click button "Generate CSV"
        cy.get('[id="btn-get-data"]')
            .click();

        //Click button "Arrange CSV"
        cy.get('[id="btn-arr-data"]')
            .click();

        //Click button "Download CSV"
        cy.get('[id="btn-download-data"]')
            .click();
    });

});