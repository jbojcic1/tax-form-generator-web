describe('Create Account', () => {
  beforeEach(() => cy.visit('/register'));

  it('should display welcome message', () => {
    cy.get('h2').contains('Tax form generator');
  });
});
