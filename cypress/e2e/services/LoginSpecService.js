import LoginPageImplementation from '../../support/pageimplementation/LoginPageImplementation'

class LoginSpecService
{
init()
{
    LoginPageImplementation.getUrl()
    LoginPageImplementation.getException()

    
}

LoginAsUser()
{
    LoginPageImplementation.clickOnSignin()
    LoginPageImplementation.enterEmail()
    LoginPageImplementation.enterPassword()
    LoginPageImplementation.submitButton()

   
}

logout(){
    LoginPageImplementation.getProfile()
    LoginPageImplementation.logout()
}

}
export default new LoginSpecService;
