
import MainNavBar from '../Components/MainNavBar';
class ProductsPage {
    navBar: MainNavBar;
    constructor() {
       this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/products/');
    }

}
export default ProductsPage;