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
    
    // Test: edits a task
    cy.get('.edit').first().click();
    cy.get('#assignee').clear().type('Robert'); // Update Assignee to Robert
    cy.get('.add-btn').click();
    cy.get('#task-list').should('contain.text', 'Edited Task');
    cy.screenshot('edited_task');
    
    // Test: views a task
    cy.get('.View').first().click();
    cy.get('.modal-content').should('be.visible');
    cy.screenshot('viewed_task');
    cy.get('.modal .close').click();
    
    // Test: deletes a single task
    cy.get('.delete').first().click({ force: true }); // Add { force: true } option here
    cy.get('#task-list').should('not.contain.text', 'Sample Task');
    cy.screenshot('deleted_single_task');
    
    // Test: deletes all tasks
    cy.get('#delete-all-tasks').click({ force: true }); // Add { force: true } option here
    cy.get('#task-list').should('not.contain.text', 'Sample Task');
    cy.screenshot('deleted_all_tasks');
  });
});
