describe('Registration works', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3000/test/snapshot', {})
    cy.visit('http://localhost:3000/register')
  })
  afterEach(() => {
    cy.request('POST', 'http://localhost:3000/test/restore-snapshot', {})
  })
  it('Looks as expected', () => {
    cy.document().toMatchImageSnapshot()
  })
  it('Can type into the input and the value changes', () => {
    cy.get('#email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
      .clear()
      .type('slow.typing@email.com', { delay: 100 })
      .should('have.value', 'slow.typing@email.com')
    cy.get('#password').should('have.attr', 'type', 'password')
    cy.get('#password')
      .type('password')
      .should('have.value', 'password')
    cy.get('#re-password')
      .type('password')
      .should('have.value', 'password')

    cy.server()
    // Listen to GET to comments/1
    cy.route('POST', '/auth/register').as('request')

    cy.get('button:contains("Register")').click()

    // wait for GET comments/1
    cy.wait('@request')
      .its('status')
      .should('eq', 201)
  })
})
