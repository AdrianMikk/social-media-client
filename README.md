# Workflow Course Assignment

[![Automated E2E Testing](https://github.com/AdrianMikk/social-media-client/actions/workflows/E2E.yml/badge.svg)](https://github.com/AdrianMikk/social-media-client/actions/workflows/E2E.yml)
[![Automated Unit Testing](https://github.com/AdrianMikk/social-media-client/actions/workflows/unittest.yml/badge.svg)](https://github.com/AdrianMikk/social-media-client/actions/workflows/unittest.yml)
[![Code Review](https://github.com/AdrianMikk/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/AdrianMikk/social-media-client/actions/workflows/gpt.yml)
[![Deploy static content to Pages](https://github.com/AdrianMikk/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/AdrianMikk/social-media-client/actions/workflows/pages.yml)

## Description 

We've learned how to test, configure, and automate our environment to provide useful toolchains that effortlessly improve our work.
We used HTML, JavaScript, Bootstrap, SASS, Cypress, and Jest for this project.

## Built With

* HTML
* JavaScript
* Bootstrap
* SASS
* Cypress
* Jest
* Prettier
* ESLint

## How to Install 

To get all the dependencies for the project, run: 
* npm install

## How to Use

* npm start
* npm run build

## Testing 

### E2E Testing with Cypress

Test files: 

- cypress/e2e\3-testing/login.cy.js
-     The user can access the profile when logged in
-     The user gets denied with empty input field
-     The user gets denied with empty password field
-     The user gets denied with invalid email
-     The user gets denied with invalid password
  
- cypress/e2e\3-testing/logout.cy.js
-     The user logs in existing user, to then log out.

### Unit Testing with Jest

Test files: 
-  src/js/test/login.test.js
-     The login function fetches and stores a token in browser storage
  
-  src/js/test/logout.test.js
-     The logout function clears the token from browser storage

## Acknowledgements 

Big thanks to my classmates for helping me out on Discord, especially Hans M. Andreassen. 


