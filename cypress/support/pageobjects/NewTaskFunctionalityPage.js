/// <reference types="Cypress" />

class NewTaskFunctionality{

    getTaskButton(){

        return cy.get('[data-test="float-button__toggle-simple-container-create-task"]')
    }

    getTextArea(){

        return cy.get('textarea[rows="1"]')
    }

    getText(){

        return cy.get('.ql-editor')
    }

    getImage(){

        return cy.get('.cu-uploader__dropzone')
    }

    getCreateTask(){

        return cy.get('[data-test="draft-view__submit-btn_createTask"]')
    }
}

export default new NewTaskFunctionality;
