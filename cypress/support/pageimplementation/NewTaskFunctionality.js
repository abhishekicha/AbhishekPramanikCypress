/// <reference types="Cypress" />

import NewTaskFunctionalityPage from "../pageobjects/NewTaskFunctionalityPage";


class NewTaskFunnctionality{

    getTask(){

        return NewTaskFunctionalityPage.getTaskButton().should('be.visible').click()
    }

    getTextArea(){

        return NewTaskFunctionalityPage.getTextArea().clear().type('test')
    }

    getText(){

        return NewTaskFunctionalityPage.getText().clear().type("test performance")
    }

    getImage(){

        cy.fixture("download.jpg").then((imageContent) => {
            // Use the .attachFile() command to simulate the image upload
            NewTaskFunctionalityPage.getImage().attachFile({
              fileContent: imageContent,
              fileName: "download.jpg",
              mimeType: "image/jpeg"
            });

        });
    };

    cratetask(){

        NewTaskFunctionalityPage.getCreateTask().click()
    }
    

}

export default new NewTaskFunnctionality;