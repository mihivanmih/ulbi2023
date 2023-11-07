import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './avatarDropdown.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'

interface avatarDropdownProps {
    className?: string
}

export const avatarDropdown = memo((props: avatarDropdownProps) => {
    const {
        className = ''
    } = props

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin ?? isManager
    const authData = useSelector(getUserAuthData)

    const onLogoutModal = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <Dropdown
                className={classNames(styles.avatarDropdown, {}, [className])}
                direction={'bottom left'}
                items={[
                    ...(isAdminPanelAvailable
                        ? [{
                            content: t('Админка'),
                            href: getRouteAdmin()
                        }]
                        : []),
                    {
                        content: t('Профиль'),
                        href: getRouteProfile(authData.id)
                    },
                    {
                        content: t('Выйти'),
                        onClick: onLogoutModal
                    }
                ]}
                trigger={<Avatar fallbackInverted size={30} src={authData.avatar}/>}
            />
        )
    }

    return null
})
