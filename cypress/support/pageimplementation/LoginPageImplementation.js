import LoginPage from "../pageobjects/LoginPage";

class LoginPageImplementation{

    getException(){

        return    Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
               
        }

    clickOnSignin() {
        return LoginPage.getClickOnSignin().click()
    }

    getUrl() {

        const baseUrl = Cypress.env('baseUrl');

        return  cy.visit(baseUrl);
         
    }

    enterEmail() {
        const email = Cypress.env('email');

        return LoginPage.getEmail().should("be.visible").type(email)

    }

    enterPassword() {

        const password = Cypress.env('password');

        return LoginPage.getPassword().should("be.visible").type(password)
    }
    submitButton() {
        return LoginPage.getSignIn().should("be.enabled").click()
    }

    getProfile(){

        return LoginPage.getProfile().click()
    }

    logout(){

        return LoginPage.getLogout().click()
    }
}

export default new LoginPageImplementation;