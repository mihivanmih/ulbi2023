import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './avatarDropdown.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { RoutePath } from '@/shared/config/roteConfig/routeConfig'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'

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
                            href: RoutePath.admin_panel
                        }]
                        : []),
                    {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData.id
                    },
                    {
                        content: t('Выйти'),
                        onClick: onLogoutModal
                    }
                ]}
                trigger={<Avatar size={30} src={authData.avatar}/>}
            />
        )
    }

    return null
})
