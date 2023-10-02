describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('user can navigate to page of a pokemon', function () {
    cy.visit('http://localhost:5000')
    const ivysaur = cy.contains('ivysaur')
    ivysaur.click()
    cy.contains('chlorophyll')
  })
})
