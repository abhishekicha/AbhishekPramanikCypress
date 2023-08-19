import LoginSpecService from "../services/LoginSpecService"

describe('Login & Logout fuctionality', function () {

    it('Open The Clickup Website',LoginSpecService.init)
    it('Login as User',LoginSpecService.LoginAsUser)
    it('Logout', LoginSpecService.logout)


});