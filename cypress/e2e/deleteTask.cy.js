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
  // });

  // deletes the created task and takes a screenshot
    cy.get('.delete', { timeout: 10000 }).first().click(); // Increase the timeout if necessary
    cy.get('#task-list').should('not.contain', 'Prof');
    cy.screenshot('deleted_task');
  
    });
  });

