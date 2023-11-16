import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'

import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { useTranslation } from 'react-i18next'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationButton } from '@/features/notificationButton'
import { getRouteArticleCreate } from '@/shared/const/router'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)

    const mainClass = toggleFeatures({
        name: 'isAppRedisigned',
        on: () => styles.NavbarRedesigned,
        off: () => styles.Navbar,
    })

    if (authData) {
        return (
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={
                    <header className={classNames(mainClass, {}, [className])}>
                        <HStack gap={'16'} className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header
                        className={classNames(styles.Navbar, {}, [className])}
                    >
                        <Text
                            className={styles.appName}
                            title={t('It News')}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleCreate()}
                            variant={'primary'}
                            className={styles.createBtn}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <HStack gap={'16'} className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        )
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={<></>}
                off={<Text className={styles.appName} title={t('It News')} />}
            />
            <div className={styles.links}>
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={
                        <LoginModal>
                            <Button variant={'clear'}>{t('Войти')}</Button>
                        </LoginModal>
                    }
                    off={
                        <LoginModal>
                            <ButtonDeprecated theme={ThemeButton.OUTLINE}>
                                {t('Войти')}
                            </ButtonDeprecated>
                        </LoginModal>
                    }
                />
            </div>
        </header>
    )
})
