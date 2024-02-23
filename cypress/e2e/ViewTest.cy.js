describe('Create Task', () => {
    it('should create a new task', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('.header h1').should('contain.text', 'Mars Mission');
      cy.get('.side-panel h2').should('contain.text', 'Task Manager');
  
      cy.get('#create-task').click();
      cy.get('#task-form').should('be.visible');
      cy.get('#title').type('Prof');
      cy.get('#TaskCreator').type('Justin');
      cy.get('#jobtitle').type('officer');
      cy.get('#assignee').type('Dave');
      cy.get('.add-btn').click();
      cy.get('#task-list').should('contain.text', 'Prof');
      cy.screenshot('created_task');
  
      // Clicking the view button and verifying the modal
      cy.get('.btn.View').first().click();
      cy.get('.modal').should('be.visible');
      cy.get('.modal-content h2').should('contain.text', 'Task Details');
      cy.get('.modal-content p').should('have.length', 4);
      cy.screenshot('Task Details');
  
      // Closing the modal
      cy.get('.modal .close').click();
  
      // Wait until the modal is not visible anymore
      cy.get('.modal').should('not.be.visible');
    });
  });
  