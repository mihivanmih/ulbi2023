let profileId = ''
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('')
        cy.LoginE2E().then((data) => {
            profileId = data.id
            cy.visit(`profile/${data.id}`)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Тестовый')
    })
    it('И редактирует его', () => {
        const newName = 'new'
        const lastName = 'lastname'

        cy.updateProfile(newName, lastName)
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName)
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastName)
    })
})
