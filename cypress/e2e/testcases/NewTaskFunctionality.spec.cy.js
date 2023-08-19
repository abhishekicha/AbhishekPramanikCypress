import BaseSpecService from "../services/BaseSpecService";

import NewTaskFunctionalitySpecService from "../services/NewTaskFunctionalitySpecService";

describe('New Task Add fuctionality', function () {



    it('Open The Clickup Website',BaseSpecService.init)
    it('Login as User',BaseSpecService.LoginAsUser)
    it('Add New Task', NewTaskFunctionalitySpecService.getTasks)
    it('Add Task Name', NewTaskFunctionalitySpecService.getText)
    it('Add Task Details', NewTaskFunctionalitySpecService.getTexts)
    it('Image Upload', NewTaskFunctionalitySpecService.getImage)
    it('Create Task', NewTaskFunctionalitySpecService.createTask)
    it('Logout', NewTaskFunctionalitySpecService.logout)


});