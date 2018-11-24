context('Navigation', () => {

    it('Verify 404 for no input', () => {
      cy.request({url: '/api/Format/',
      failOnStatusCode: false})
      .should((response) => {
        expect(response.status).to.eq(404)
      })
    })

   it('Verify 400 for invalid input', () => {
      cy.request({url: '/api/Format/1bf',
      failOnStatusCode: false})
      .should((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Verify numeric input returns formated text for 0', () => {
      cy.request('/api/Format/0')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.eq('0.00')
      })
    })

    it('Verify numeric input returns formated, separated and rounded text', () => {
        cy.request('/api/Format/1231.159897')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.eq('1 231.16')
        })
    })

    it('Verify numeric input returns formated and separated text', () => {
        cy.request('/api/Format/1600')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.eq('1 600.00')
        })
    })

    it('Verify negative numeric input returns formated, separated and rounded text', () => {
      cy.request('/api/Format/-1231.159897')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.eq('-1 231.16')
      })
  })

  it('Verify negative numeric input returns formated and separated text', () => {
      cy.request('/api/Format/-1600')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.eq('-1 600.00')
      })
  })
})