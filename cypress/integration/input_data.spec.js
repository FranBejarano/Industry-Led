//Load a fixed set data located in a file

const tests = require('C:/data/cypress/fixtures/testDataFromCSV.json');

describe('Fixtures demo', function(){

    beforeEach(function(){
       
        cy.visit('http://localhost/test/form.html');
    });

    tests.forEach(test => {

        String regex = JSON.stringify(test.vehicle);

        it('test.name', function(){

            cy.get('[id="firstName"]').type(test.firstName);
            cy.get('[id="surname"]').type(test.lastName);
            cy.get('[id="email"]').type(test.email);
            cy.get('[id="maker_selector"]')
                .should('contain', new RegExp(regex)).select();
            cy.get('[id="vehicle"]').type(test.vehicle);
        });
    });
});
