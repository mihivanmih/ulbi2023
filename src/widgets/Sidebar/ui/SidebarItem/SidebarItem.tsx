import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '../../../../entities/User'
import type { SideBarItemType } from '../../model/types/sidebar'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './SidebarItem.module.scss'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface SidebarItemProps {
    item: SideBarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()

    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <AppLink
                    variant={'primary'}
                    to={item.path}
                    className={classNames(
                        styles.itemRedesigned,
                        { [styles.collapsedRedesigned]: collapsed },
                        [],
                    )}
                    activeClassName={styles.active}
                >
                    <Icon Svg={item.Icon} />
                    <span className={styles.link}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(
                        styles.item,
                        { [styles.collapsed]: collapsed },
                        [],
                    )}
                >
                    <item.Icon className={styles.icon} />
                    <span className={styles.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
        />
    )
})
