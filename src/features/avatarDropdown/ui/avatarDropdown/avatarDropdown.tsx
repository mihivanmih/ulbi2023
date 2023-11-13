import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './avatarDropdown.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'
import { useDispatch, useSelector } from 'react-redux'
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { ToggleFeatures } from '@/shared/lib/features'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'

interface avatarDropdownProps {
    className?: string
}

export const avatarDropdown = memo((props: avatarDropdownProps) => {
    const { className = '' } = props

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin ?? isManager
    const authData = useSelector(getUserAuthData)

    const onLogoutModal = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogoutModal,
        },
    ]

    if (authData) {
        return (
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={
                    <Dropdown
                        className={classNames(styles.avatarDropdown, {}, [
                            className,
                        ])}
                        direction={'bottom left'}
                        items={items}
                        trigger={<Avatar size={40} src={authData.avatar} />}
                    />
                }
                off={
                    <DropdownDeprecated
                        className={classNames(styles.avatarDropdown, {}, [
                            className,
                        ])}
                        direction={'bottom left'}
                        items={items}
                        trigger={
                            <AvatarDeprecated
                                fallbackInverted
                                size={30}
                                src={authData.avatar}
                            />
                        }
                    />
                }
            />
        )
    }

    return null
})
