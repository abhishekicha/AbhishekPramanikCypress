import LoginPageImplementation from '../../support/pageimplementation/LoginPageImplementation'

class BaseSpecService{


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