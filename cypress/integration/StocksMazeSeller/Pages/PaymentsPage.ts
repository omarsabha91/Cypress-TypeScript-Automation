import MainNavBar from '../Components/MainNavBar';
class PaymentsPage {
    navBar: MainNavBar;
    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/payments/');
    }

}
export default PaymentsPage;
