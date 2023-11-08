export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/` + profileId,
        headers: {
            Authorization: 'asd',
        },
        body: {
            id: '4',
            first: 'Тестовый',
            lastname: 'Чел',
            age: 19,
            currency: 'RUB',
            country: 'Russia',
            city: 'Москва',
            username: 'userName',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/A._Schwarzenegger.jpg',
        },
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
