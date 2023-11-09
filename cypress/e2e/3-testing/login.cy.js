describe('Login', () => {
    it('should login an existing user', () => {
        cy.visit("/");
        cy.wait(500);
        cy.get("#registerModal").contains("Login").click();
        cy.wait(500);
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").type('adriantesting@stud.noroff.no');
        cy.get("#loginPassword").type('adrianjs2');
        cy.get("button[type=submit]").contains("Login").click();
    });

    it('should deny empty input field', () => {
        cy.visit("/");
        cy.wait(500);
        cy.get("#registerForm").contains("Login").click();
        cy.wait(500);
        cy.get("#loginForm").should("be.visible");
        cy.get("button[type=submit]").contains("Login").click();
        cy.get("#loginEmail:invalid").should("exist");
    });

    it('should deny empty password field', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginForm').should('be.visible');
        cy.get('#loginEmail').type('adriantesting@stud.noroff.no');
        cy.get('button[type=submit]').contains('Login').click();
        cy.get('#loginPassword:invalid').should('exist');
    });


    it('should deny user with invalid email', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginForm').should('be.visible');
        cy.get('#loginEmail').type('adriantestinggmail.com');
        cy.get('button[type=submit]').contains('Login').click();
        cy.get('#loginEmail:invalid').should('exist');
    });

    it('should deny user with invalid password', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginForm').should('be.visible');
        cy.get('#loginEmail').type('adriantesting@stud.noroff.no')
        cy.get('#loginPassword').type('adrianjs');
        cy.get('button[type=submit]').contains('Login').click();
    });
});