const workingEmail = 'adriantesting@stud.noroff.no';
const workingPassword = 'adrianjs2';
const invalidEmail = 'adriantesting@gmail.com';
const invalidPassword = 'adrian';


describe('Login', () => {
    it('should access the profile when logged in', () => {
        cy.visit("/");
        cy.wait(1000);
        cy.get("#registerModal").contains("Login").click();
        cy.wait(1000);
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").type(workingEmail);
        cy.get("#loginPassword").type(workingPassword);
        cy.get("button[type=submit]").contains("Login").click();
        cy.wait(2000);
    });

    it('should deny empty input field', () => {
        cy.visit("/");
        cy.wait(1000);
        cy.get("#registerForm").contains("Login").click();
        cy.wait(1000);
        cy.get("#loginForm").should("be.visible");
        cy.get("button[type=submit]").contains("Login").click();
        cy.get("#loginEmail:invalid").should("exist");
        cy.get("#loginPassword:invalid").should("exist");
    });

    it('should deny empty password field', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginForm').should('be.visible');
        cy.get('#loginEmail').type(workingEmail);
        cy.get('button[type=submit]').contains('Login').click();
        cy.get('#loginPassword:invalid').should('exist');
    });

    it('should deny user with invalid email', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginForm').should('be.visible');
        cy.get('#loginEmail').type(invalidEmail);
        cy.get('button[type=submit]').contains('Login').click();
        cy.get('#loginEmail:invalid').should('exist');
    });

    it('should deny user with invalid password', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.get('#registerForm').contains('Login').click();
        cy.wait(1000);
        cy.get('#loginForm').should('be.visible');
        cy.get('#loginEmail').type(workingEmail);
        cy.get("input:invalid#loginPassword");
        cy.get('button[type=submit]').contains('Login').click();
    });
});