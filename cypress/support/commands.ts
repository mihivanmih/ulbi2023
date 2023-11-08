import {LoginE2E} from "./commands/login";

Cypress.Commands.add('login', LoginE2E)

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}

export {}
