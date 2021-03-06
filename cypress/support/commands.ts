/// @ts-check
///<reference path="../global.d.ts" />
///<reference types="cypress" />

import "@testing-library/cypress/add-commands";
import { v4 as uuidv4 } from "uuid";

Cypress.Commands.add("getCommand", (url: string, responseBody: Array<any>) => {
  cy.intercept("GET", url, {
    status: 200,
    body: responseBody,
  });
});

Cypress.Commands.add("deleteCommand", (url: string) => {
  cy.intercept("DELETE", url, {
    statusCode: 200,
  });
});

Cypress.Commands.add("postCommand", (url: string, requestBody: any) => {
  requestBody.id = uuidv4();

  cy.intercept("POST", url, {
    statusCode: 201,
    body: requestBody,
  });
});

Cypress.Commands.add("SetupInputFieldsCommand", () => {
  cy.get("[data-testid=todo-input]").as("Input");
  cy.get("[data-testid=save-todo]").as("Save");
});
