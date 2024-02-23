describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // 

    cy.fixture('tasks.json').then((tasks) => {
      tasks.forEach((task, index) => {
        cy.get('#create-task').click();
        cy.get('#task-form').should('be.visible');
        cy.get('#title').type(task.title);
        cy.get('#TaskCreator').type(task.TaskCreator);
        cy.get('#jobtitle').type(task.jobtitle);
        cy.get('#assignee').type(task.assignee);
        cy.get('.add-btn').click();
        cy.get('#task-list').should('contain.text', task.title);
        
        // Add a delay of 1 second between creating each task
        cy.wait(1000);
        
        if (index === tasks.length - 1) {
          cy.screenshot('created_tasks');
        }
      });
    });
    if (index === tasks.length - 1) {
      cy.screenshot('created_tasks');
    }
  });
});
