import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage'
import { User } from '../../../src/entities/User'
import { selectByTestid } from '../../helpers/selectByTestid'

export const LoginE2E = (
    username: string = 'testuser',
    password: string = '123',
) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
        return body
    })
}

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestid(testId))
}

declare global {
    namespace Cypress {
        interface Chainable {
            LoginE2E(email?: string, password?: string): Chainable<User>
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
        }
    }
}
