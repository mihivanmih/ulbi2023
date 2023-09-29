import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/roteConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import AboutIcon from 'shared/assets/icons/about20x20.svg'
import MainIcon from 'shared/assets/icons/main20x20.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed, test: true, test2: false }, [className])}>
            <Button
                data-testid="sidebar-toogle"
                onClick={onToggle}
                className={styles.collapseBtn}
                square
                size={ButtonSize.L}
                theme={ThemeButton.BACKGROUND}>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.item}>
                    <AboutIcon className={styles.icon}/>
                    <span className={styles.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={styles.item}>
                    <MainIcon className={styles.icon}/>
                    <span className={styles.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>
        </div>
    )
}
