import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { memo, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
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
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>
        </div>
    )
})
