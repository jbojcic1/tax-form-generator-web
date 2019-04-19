describe('Create Account', () => {
  beforeEach(() => cy.visit('/register'));

  it('should create account and redirect to login', () => {
    cy.get('input[name="email"]').type('bob@bobovski.com');
    cy.get('input[name="firstName"]').type('Bob');
    cy.get('input[name="lastName"]').type('Bobovski');
    cy.get('input[name="password"]').type('123456');
    cy.get('input[name="confirmPassword"]').type('123456');
    cy.get('button[type="submit"]').click();

    cy.contains('Registered successfully.').should('be.visible');
    cy.location('pathname').should('eq', '/login');
  });

  it('should show error message if creation fails', () => {
    cy.get('input[name="email"]').type('bob@bobovski.com');
    cy.get('input[name="firstName"]').type('Bob');
    cy.get('input[name="lastName"]').type('Bobovski');
    cy.get('input[name="password"]').type('123456');
    cy.get('input[name="confirmPassword"]').type('123456');
    cy.get('button[type="submit"]').click();

    cy.contains('Error. Failed to add user.').should('be.visible');
  });
});
