import {selectByTestid} from "../../helpers/selectByTestid";

describe('Роутинг', () => {

  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/')
      cy.get(selectByTestid('MainPage')).should('exist')
    })
    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestid('MainPage')).should('exist')
    })
    it('Переход открывает не существующий маршрут', () => {
      cy.visit('/asfddsfsdf')
      cy.get(selectByTestid('NotFoundPage')).should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.LoginE2E()
    })

    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestid('ProfilePage')).should('exist')
    })
    it('Переход открывает страницу со списком статей', () => {
      cy.visit('/articles')
      cy.get(selectByTestid('ArticlesPage')).should('exist')
    })
  })


})
