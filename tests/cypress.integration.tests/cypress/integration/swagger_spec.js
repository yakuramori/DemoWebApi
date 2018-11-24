context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/swagger')
    cy.contains('/api/Format/{moneyAmount}').click()
    cy.contains('Try it out').click()
  })

  it('Verify input required', () => {
    cy.contains('Execute').click()
    cy.get('input')
    .should('have.attr', 'title', 'Required field is not provided')
  })

  it('Verify alfa input returns Bad Request', () => {
	  cy.get('input').type('alfabum')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.contains('Invalid input: [alfabum]')
    cy.contains('Error: Bad Request')
  })

  it('Verify alfa-numeric input returns Bad Request', () => {
	  cy.get('input').type('110alfabum6')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.contains('Invalid input: [110alfabum6]')
    cy.contains('Error: Bad Request')
  })

  it('Verify special characters input returns Bad Request', () => {
	  cy.get('input').type('.@$')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.contains('Invalid input: [.@$]')
    cy.contains('Error: Bad Request')
  })

  it('Verify numeric input returns formatted text for 0', () => {
	  cy.get('input').type('0')
    cy.contains('Execute').click()
    cy.get('.response .microlight').first()
    .should('have.text', '0.00')
    cy.get('input').type('0.00')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.get('.response .microlight').first()
    .should('have.text', '0.00')
  })

  it('Verify numeric input returns formatted, separated and rounded text', () => {
	  cy.get('input').type('231.159897')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.get('.response .microlight').first()
    .should('have.text', '231.16')
  })

  it('Verify numeric input returns formatted and separated text', () => {
	  cy.get('input').type('1600')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.get('.response .microlight').first()
    .should('have.text', '1 600.00')
  })

  it('Verify numeric input returns formatted, separated and rounded text', () => {
	  cy.get('input').type('2310000.159897')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.get('.response .microlight').first()
    .should('have.text', '2 310 000.16')
  })

  it('Verify localised numeric input returns formatted, separated and rounded text', () => {
	  cy.get('input').type('2,310,000.159897')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.get('.response .microlight').first()
    .should('have.text', '2 310 000.16')
  })

  it('Verify negative numeric input returns formatted, separated and rounded text', () => {
	  cy.get('input').type('-2310000.159897')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.get('.response .microlight').first()
    .should('have.text', '-2 310 000.16')
  })

  it('Verify localized negative numeric input returns formatted, separated and rounded text', () => {
	  cy.get('input').type('-2,310,000.159897')
    cy.contains('Execute').click()
    cy.get('.loading-container').should('not.be.visible')
    cy.get('.response .microlight').first()
    .should('have.text', '-2 310 000.16')
  })
})