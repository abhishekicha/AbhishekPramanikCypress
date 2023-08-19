import NewTaskFunctionality from "../../support/pageimplementation/NewTaskFunctionality";
import LoginPageImplementation from '../../support/pageimplementation/LoginPageImplementation'


class NewTaskFunctionalitySpecService{


    //calling the functions from imported file

    getTasks(){

    return   NewTaskFunctionality.getTask()
      
    }

    getText(){

        return NewTaskFunctionality.getTextArea()
    }

    getTexts(){

        return NewTaskFunctionality.getText()
    }

    getImage(){

        return NewTaskFunctionality.getImage()
    }
    
    createTask(){

        return NewTaskFunctionality.cratetask()
    }
    
    logout(){
        LoginPageImplementation.getProfile()
        LoginPageImplementation.logout()
    }
}

export default new NewTaskFunctionalitySpecService;