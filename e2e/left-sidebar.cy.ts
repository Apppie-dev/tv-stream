describe('should be sidebar at left side of page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  })

  it('left sidebar is exist', () => {
    cy.get('.left-sidebar');
  })

  it('should have logo', () => {
    cy.get('.left-sidebar .logotype');
    cy.get('.left-sidebar .logotype').should('have.text', 'tinymovies');
  })

  it('should exist menus wrapper', () => {
    cy.get('.left-sidebar .menu-wrapper');
  })

  it('should exist', () => {
    cy.get('.left-sidebar .menu-list').should('have.length', 3);
  })

  it('should have menu child items', () => {
    const selector = '.left-sidebar .menu-list';

    cy.get(selector).should('have.length', 3);

    cy.get(`${selector}`).first().get('.menu-list-title');
    cy.get(`${selector}`).first().find(`.menu-list-title`).should('have.text', 'Menu');
    cy.get(`${selector}`).first().find('.menu-list-item').should('have.length', 4);
    cy.get(`${selector}`).first().find('.menu-list-item').first().should('have.text', 'Home');

    cy.get(`${selector}`).eq(1).get('.menu-list-title');
    cy.get(`${selector}`).eq(1).find('.menu-list-title').should('have.text', 'Library');
    cy.get(`${selector}`).eq(1).find('.menu-list-item').should('have.length', 6);
    cy.get(`${selector}`).eq(1).find('.menu-list-item').last().should('have.text', 'Completed');

    cy.get(`${selector}`).last().get('.menu-list-title');
    cy.get(`${selector}`).last().find('.menu-list-title').should('have.text', 'General');
    cy.get(`${selector}`).last().find('.menu-list-item').should('have.length', 2);
    cy.get(`${selector}`).last().find('.menu-list-item').first().should('have.text', 'Settings');
  })
})
