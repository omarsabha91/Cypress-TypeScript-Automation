
enum NavItems {
    HOME = 'Home',
    SETTINGS = 'Settings',
    ORDERS = 'Orders',
    NOTIFICATIONS = 'Notifications',
    PRODUCTS = 'Products',
    PAYMENTS = 'Payments'
}
class MainNavBar {

    NAV_ITEMS = NavItems;
    clickNavItem(text: NavItems): void {
        cy.get('#mynavbar').contains('span.nav-link-text', text).click();
    }
}
export default MainNavBar;
