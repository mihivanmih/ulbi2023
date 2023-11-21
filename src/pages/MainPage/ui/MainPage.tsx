import React from 'react'
import { Page } from '@/widgets/Page'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import styles from './MainPage.module.scss'
import { LoginModal } from '@/features/AuthByUsername'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'

const MyComponent = () => {
    return (
        <Page data-testid={'MainPage'} className={styles.MainPage}>
            <VStack max className={styles.MainPageCenter} gap={'8'}>
                <Card padding={'24'}>
                    <Text
                        text={'Добро пожаловать на сайт'}
                        size={'l'}
                        paddingBottom={'16'}
                    />
                    <p>
                        Что бы увидеть больше разделов, необходимо{' '}
                        <a>
                            <LoginModal>{'авторизоваться'}</LoginModal>
                        </a>
                    </p>
                    <Card className={styles.mainLogin} padding={'16'}>
                        <Text
                            text={'Новый дизайн сайта'}
                            paddingBottom={'8'}
                            className={styles.title}
                        />
                        <Card>
                            <HStack gap={'4'}>
                                <Text text={'Login:'} bold />{' '}
                                <Text text={'admin'} />
                            </HStack>
                            <HStack gap={'4'}>
                                <Text text={'Pass:'} bold />{' '}
                                <Text text={'123'} />
                            </HStack>
                        </Card>
                        <Text
                            text={'Старый дизайн сайта'}
                            paddingBottom={'8'}
                            className={styles.title}
                        />
                        <Card paddingBottom={'0'}>
                            <HStack gap={'4'}>
                                <Text text={'Login:'} bold />{' '}
                                <Text text={'manager'} />
                            </HStack>
                            <HStack gap={'4'}>
                                <Text text={'Pass:'} bold />{' '}
                                <Text text={'123'} />
                            </HStack>
                        </Card>
                    </Card>
                    <Text
                        text={
                            'После авторизации станут доступны такие разделы как:'
                        }
                    />
                    <ul className={styles.MainPageUl}>
                        <li> Профиль с возможностью редактирования и оценки</li>
                        <li>Статьи с фильтрами, сортировкой, поиском</li>
                        <li>
                            Карточка статьи с оценкой, комментариями и
                            рекомендациями
                        </li>
                        <li>
                            Настройки пользователя, где можно переключить тему и
                            посмотреть старый дизайн
                        </li>
                    </ul>
                    Более подробно о сайте и проделанной работе можно прочитать{' '}
                    <AppLink variant={'color'} to={'/about'}>
                        тут
                    </AppLink>
                    <p>
                        Посмотреть код проекта —{' '}
                        <a
                            href="https://github.com/mihivanmih/ulbi2023"
                            target="_blank"
                            rel="noreferrer"
                        >
                            git
                        </a>
                    </p>
                </Card>
            </VStack>
        </Page>
    )
}

export default MyComponent
