import { Page } from '@/widgets/Page'
import styles from './AboutPage.module.scss'
import React from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

const AboutPage = () => {
    return (
        <Page data-testid={'AboutPage'}>
            <VStack max className={styles.AboutPage} gap={'8'}>
                <Card padding={'24'}>
                    <Text text={'О сайте'} size={'l'} paddingBottom={'8'} />
                    <p>Этот сайт был создан на основе курса ulbitv.</p>
                    <p>Это большой проект, включающий в себя:</p>

                    <Card padding={'16'} paddingBottom={'0'}>
                        <Text text={'Архитектура'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Модули</li>
                                    <li>Декомпозиция</li>
                                    <li>Бизнес сущности</li>
                                    <li>
                                        Слабое зацепление и сильная связность
                                    </li>
                                    <li>Переиспользование</li>
                                    <li>Методология FSD</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>

                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Конфигурация'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Конфигурация проекта с нуля (Webpack)
                                    </li>
                                    <li>
                                        Настройка: React, Typescript, Babel,
                                        vite, scss, css modules, prettier
                                    </li>
                                    <li>
                                        Настройка тестовой среды, jest, rtl,
                                        storybook, loki, Cypress
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>

                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Кольцевые зависимости и babel плагин'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Поиск кольцевых зависимостей</li>
                                    <li>
                                        Реализация babel плагина, который
                                        удаляет лишний код из сборки
                                    </li>
                                    <li>
                                        Browserlist, как это влияет на бандл
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>

                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'TypeScript'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Настройка TS (tsconfig), вебпак, union
                                        типы, дженерик компоненты
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>

                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'СI/CD и pre-commit хуки'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Настройка ci pipeline, который прогоняет
                                        3 вида тестов и код на линтер; делает
                                        сборку проекта, сторибука
                                    </li>
                                    <li>
                                        Настройка pre commit хуков с помощью
                                        husky
                                    </li>
                                    <li>
                                        Генерация отчетов для юнит и скриншотных
                                        тестов с информацией об успешных/упавших
                                        тестах
                                    </li>
                                    <li>
                                        Публикация отчетов в ci github pages
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>

                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Линтинг и prettier'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Настройка под себя code-style, в
                                        частности ESlint и stylelint
                                    </li>
                                    <li>
                                        Реализация самописного плагина для
                                        eslint в виде отдельного npm пакета
                                    </li>
                                    <li>
                                        Плагин содержит 3 самописных правила,
                                        которые следят за правильными доступами
                                        к слоям, правилами архитектуры,
                                        изоляцией модулей
                                    </li>
                                    <li>
                                        Правила обладают автофиксом, который
                                        автоматически исправляет неправильный
                                        код
                                    </li>
                                    <li>
                                        Настройка Prettier для форматирования и
                                        наведения красоты в коде
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Сторибук и скриншотные тесты'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Настройка Storybook и описание story
                                        case для каждого компонента и всех его
                                        состояний
                                    </li>
                                    <li>Скриншотные тесты</li>
                                    <li>
                                        Регрессионое тестирование интерфейса
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Unit и RTL тесты'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Настройка тестовой среды для unit jest
                                        тестов и тестов на компоненты с помощью
                                        React Testing Library
                                    </li>
                                    <li>
                                        Тестирование каждого разработанного
                                        модуля (селекторы, async thunks,
                                        редюсеры, компоненты)
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'e2e тестирование'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Покрытие модулей E2E тестами</li>
                                    <li>
                                        Кастомные команды, фикстуры, моки,
                                        стабы, интерцепторы, скипы
                                    </li>
                                    <li>End-to-end тесты</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Отчеты'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Генерация удобных отчетов для
                                        скриншотных/юнит/компонентных тестов, с
                                        помощью которых отслеживать работу
                                        тестов станет проще
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Ошибки'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Обработка ошибок, ErrorBoundary</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Нормализация данных'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Нормализации данных, EntityAdapter</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Оптимизация'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Перерисовки и как с ними бороться</li>
                                    <li>Анализ размера бандла</li>
                                    <li>Использование бандл анализаторов</li>
                                    <li>Асинхронные компоненты</li>
                                    <li>Асинхронные Redux редюссеры</li>
                                    <li>Reducer manager</li>
                                    <li>Изоляция модулей</li>
                                    <li>Throttle и debounce</li>
                                    <li>
                                        Асинхронная подгрузка библиотек, которые
                                        не нужны сразу (для анимаций и драг энд
                                        дропа)
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Виртуализация'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Виртуальные списки, повышение
                                        производительности
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Роутинг'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>React-router-dom V6</li>
                                    <li>
                                        Доступы для страниц, по авторизации,
                                        либо по ролям
                                    </li>
                                    <li>Страницы в отдельных чанках</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Запросы и работа с данными'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Вся работа с данными осуществляется с
                                        помощью Redux toolkit
                                    </li>
                                    <li>Для работы с АПИ используется axios</li>
                                    <li>RTK query</li>
                                    <li>
                                        Асинхронный инжект новых эндпоинтов,
                                        чтобы сохранять размер бандла
                                        минимальным (code splitting)
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'UI'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Библиотека компонентов</li>
                                    <li>
                                        Более 20 UI компонентов, включая
                                        модальные окна с порталами, выпадающие
                                        списки\меню, сайдбар, кнопки с разными
                                        темами, скелетоны, попапы, ленивые
                                        изображения, drawer, аватары,
                                        вертикальные и горизонтальные стеки и
                                        т.д.
                                    </li>
                                    <li>Headless библиотека</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Темы и стили'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>CSS модули и темизация</li>
                                    <li>
                                        Правильная структура стилей и внедрение
                                        3 цветовых тем (темная, светлая,
                                        оранжевая)
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'i18n'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Интернационализация</li>
                                    <li>Два языка (русский и английский)</li>
                                    <li>
                                        Разбивка переводов на чанки и подгрузка
                                        их порциями, чтобы не увеличивать размер
                                        бандла
                                    </li>
                                    <li>Плюральные формы</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Миграция на React 18'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Миграция проекта с 17 на 18 версию
                                        реакта
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text text={'Рефакторинг'} className={styles.title} />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Анализя кода и его рефакторинг</li>
                                    <li>
                                        Разборка слабых мест, исправление,
                                        декомпозиция и изоляция модулей
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Автоматизированный рефакторинг'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>
                                        Скрипты для парсинга AST исходного кода
                                    </li>
                                    <li>
                                        Работа с нодами абстрактного
                                        синтаксического дерева
                                    </li>
                                    <li>
                                        Изменение кода во всем проекте глобально
                                        с помощью скриптов
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Git flow vs trunk based. Feature flags'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Git flow и trunk based</li>
                                    <li>
                                        Концепция feature flags и настройка
                                        автоматики, которая умеет удалять
                                        неиспользуемые фича флаги
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Редизайн и автоматизация'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Полный редизайн проекта</li>
                                    <li>
                                        Модульная гибкая layout система с
                                        вложенными layout
                                    </li>
                                    <li>
                                        Выбор пользователем интерфейса
                                        отображения (одновременно в коде
                                        существует старый и новый дизайн)
                                    </li>
                                    <li>
                                        Реализация скрипта, который при
                                        выполнении удалит весь старый код
                                    </li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>
                    <Card padding={'16'} paddingBottom={'0'} paddingTop={'0'}>
                        <Text
                            text={'Деплой и nginx'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <ul className={styles.AboutPageUl}>
                                    <li>Аренда облачного сервера</li>
                                    <li>Настройка nginx</li>
                                    <li>
                                        Добавление сертификата и настройка HTTPS
                                    </li>
                                    <li>Подключение доменного имени</li>
                                    <li>Сжатие (gzip) бандла</li>
                                    <li>Проксирование запросов</li>
                                    <li>Скрипт для деплоя</li>
                                </ul>
                            </HStack>
                        </Card>
                    </Card>

                    <p>
                        Больше информации о курсе вы можете получить на сайте{' '}
                        <a
                            href="https://ulbitv.ru/frontend"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://ulbitv.ru/frontend
                        </a>
                    </p>
                </Card>
            </VStack>
        </Page>
    )
}

export default AboutPage
