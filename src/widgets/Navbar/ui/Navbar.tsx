import React, { memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
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
import { ToggleFeatures } from '@/shared/lib/features'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={
                    <header
                        className={classNames(styles.NavbarRedesigned, {}, [
                            className,
                        ])}
                    >
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
        <header className={classNames(styles.Navbar, {}, [className])}>
            <Text className={styles.appName} title={t('It News')} />
            <div className={styles.links}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    )
})
