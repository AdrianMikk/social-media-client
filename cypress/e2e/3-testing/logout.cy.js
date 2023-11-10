describe('Logout', () => {
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

    it('should logout an existing user', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.get("#registerModal").contains("Login").click();
        cy.wait(1000);
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").type('adriantesting@stud.noroff.no');
        cy.get("#loginPassword").type('adrianjs2');
        cy.get('button[type=submit]').contains('Login').click();
        cy.wait(1000);
        cy.get("button[data-auth=logout]").contains("Logout").click();
        cy.wait(1000);
    });
});