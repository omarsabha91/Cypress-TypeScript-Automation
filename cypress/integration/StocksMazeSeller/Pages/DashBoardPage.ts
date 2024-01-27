import MainNavBar from '../Components/MainNavBar';

class DashBoardPage {
    navBar: MainNavBar;

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit(): void {
        cy.visit('/dashboard/');
    }
}

export default DashBoardPage;
