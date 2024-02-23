describe('Create Task', () => {
    it('should create a new task', () => {
      cy.visit('http://localhost:3000');
        
      // Test: loads the app correctly
    // it('loads the app correctly', () => {
      cy.get('.header h1').should('contain.text', 'Mars Mission');
      cy.get('.side-panel h2').should('contain.text', 'Task Manager');
    // });

    // it('creates a new task', () => {
        cy.get('#create-task').click();
        cy.get('#task-form').should('be.visible');
        cy.get('#title').type('Prof');
        cy.get('#TaskCreator').type('Justin');
        cy.get('#jobtitle').type('officer');
        cy.get('#assignee').type('Dave');
        cy.get('.add-btn').click();
        cy.get('#task-list').should('contain.text', 'Prof');
        cy.screenshot('created_task');
    //   });

    // it('deletes all tasks', () => {
        cy.get('#delete-all-tasks').click();
        cy.get('#task-list').should('not.contain.text', 'Sample Task');
        cy.screenshot('deleted_all_tasks');
    //   });
    });
});