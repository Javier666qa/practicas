describe('template spec', () => {

  it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type("comprar pan{enter}")
    cy.get('.new-todo').type("comprar coca-cola{enter}")
  })


  it('marcar tarea', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type("comprar pan{enter}")
    cy.get('.toggle').click()
  })


  it('limpiar tarea', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type("comprar pan{enter}")
    cy.get('.toggle').click()
    cy.get('.clear-completed').click()
  })

  it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type("hola{enter}")
    cy.get('.new-todo').type("cuarta prueba{enter}")
    cy.get('[for="toggle-all"]') 
  })


})