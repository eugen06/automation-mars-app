describe('Create Task', () => {
    it('should run all tasks in order', () => {
      cy.visit('http://localhost:3000'); 
  
      // Test: loads the app correctly
      cy.get('.header h1').should('contain.text', 'Mars Mission');
      cy.get('.side-panel h2').should('contain.text', 'Task Manager');
  
      // Test: creates a new task
      cy.get('#create-task').click();
      cy.get('#task-form').should('be.visible');
      cy.get('#title').type('Prof');
      cy.get('#TaskCreator').type('Justin');
      cy.get('#jobtitle').type('officer');
      cy.get('#assignee').type('Dave');
      cy.get('.add-btn').click();
      cy.get('#task-list').should('contain.text', 'Prof');
      cy.screenshot('created_task');
  
      // Test: edits a task (update all fields with new data)
      cy.get('.edit').first().click();
      cy.get('#title').clear().type('Edited Task');
      cy.get('#TaskCreator').clear().type('Robert');
      cy.get('#jobtitle').clear().type('Manager');
      cy.get('#assignee').clear().type('John');
      cy.get('.add-btn').click();
      cy.get('#task-list').should('contain.text', 'Edited Task');
      cy.screenshot('edited_task');
    });
  });
  