class LoginPage{


    getClickOnSignin() {
        return cy.contains('Log in')
    }

    getEmail() {
        return cy.get('#login-email-input')

    }
    getPassword() {
        return cy.get('#login-password-input')
    }

    getSignIn() {
        return cy.contains('Log In')
    }

    getProfile(){

        return cy.get('div[data-test="avatar"]')
    }

    getLogout(){

        return cy.contains("Log out")
    }
}

export default new LoginPage;