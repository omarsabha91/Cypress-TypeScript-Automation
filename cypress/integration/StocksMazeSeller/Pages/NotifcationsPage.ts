import MainNavBar from '../Components/MainNavBar';
class NotificationsPage {
    navBar: MainNavBar;
    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/notifications/');
    }

}
export default NotificationsPage;
