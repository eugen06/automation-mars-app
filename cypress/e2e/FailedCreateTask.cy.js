describe('Create Task', () => {
    it('should create a new task with missing data', () => {
      cy.visit('http://localhost:3000');
  
      // Assert that the app loads correctly
      cy.get('.header h1').should('contain.text', 'Mars Mission');
      cy.get('.side-panel h2').should('contain.text', 'Task Manager');
  
      // Create a new task with missing data
      cy.get('#create-task').click();
      cy.get('#task-form').should('be.visible');
      cy.get('#title').type('Eugen');
      cy.get('#TaskCreator').clear(); // Clear the TaskCreator field
      cy.get('#jobtitle').type('Software Engineer');
      cy.get('#assignee').type('Smith');
      cy.get('.add-btn').click();
  
      
      cy.get('#task-list').should('not.contain.text', 'Eugen');
  
      
      cy.screenshot('failed_task_creation');
    });
  });
  