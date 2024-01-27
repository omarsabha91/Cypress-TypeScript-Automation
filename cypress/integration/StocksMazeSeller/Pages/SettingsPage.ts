import MainNavBar from '../Components/MainNavBar';
class SettingsPage {
    navBar: MainNavBar;
    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/settings/');
    }

}
export default SettingsPage;
