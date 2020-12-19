// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total when number buttons pressed', () => {
    cy.get('#number1').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '1982');
  })

  it('should show 4 in the running total when pressing 2, +, 2 and =', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should show 0 in the running total when pressing 2, -, 2 and =', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0');
  })

  it('should show 1 in the running total when pressing 2, /, 2 and =', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1');
  })

  it('should show 4 in the running total when pressing 2, *, 2 and =', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should show 4 in the running total after multiple operations chained', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should show positive 2 as 2', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should show negative 2 as -2', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-2');
  })

  it('should show 2 and a half as 2.5', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5');
  })

  it('should show 100000 million multiplied by 10000 million as 1e+22', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1e+22');
  })

  it('should show error if dividing by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'error');
  })
})
