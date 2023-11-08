export const setRating = (starsCount=5, feedback = 'feedback') => {
    cy.getByTestId('StarRating'+ starsCount).click()
    cy.getByTestId('ArticleRating.Input').type(feedback)
    cy.getByTestId('ArticleRating.Button.Send').click()
}

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(starsCount: number, feedback: string): Chainable<void>
        }
    }
}
