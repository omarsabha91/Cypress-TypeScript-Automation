
import MainNavBar from '../Components/MainNavBar';
class OrdersPage {
    navBar: MainNavBar;
    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/orders/');
    }

}
export default OrdersPage;