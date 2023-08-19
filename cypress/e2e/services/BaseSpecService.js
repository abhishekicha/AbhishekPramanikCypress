import LoginPageImplementation from '../../support/pageimplementation/LoginPageImplementation'

class BaseSpecService{

//calling the functions from imported file
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

}

export default new BaseSpecService;