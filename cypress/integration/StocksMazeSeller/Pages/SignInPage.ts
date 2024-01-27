class SignInPage {
    // Properties with their types
    phoneNumberInput: string = '#phone';
    passwordInput: string = '#password';
    logIn: string = '#submit-button';

    // Method with no return value (void)
    visit(): void {
        cy.visit('/login/');
    }

    // Methods with parameters typed
    typeUsername(username: string): void {
        cy.get(this.phoneNumberInput).type(username);
    }

    typePassword(password: string): void {
        cy.get(this.passwordInput).type(password);
    }

    submit(): void {
        cy.get(this.logIn).click();
    }
}

export default SignInPage;
