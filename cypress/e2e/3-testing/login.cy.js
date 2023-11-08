describe('Login', () => {
    it('should login an existing user', () => {
        // Visit the login page
        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginEmail').type('adriantesting@stud.noroff.no');
        cy.get('#loginPassword').type('adrianjs2');
        cy.get('button[type=submit]').contains('Login').click();
    });

    it('should deny user with invalid credentials', () => {

        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginEmail').type('adriantesting@gmail.com');
        cy.get('#loginPassword').type('adrianjs');
        cy.get('button[type=submit]').contains('Login').click();
    });
});