import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const SidebarItemsList = useSelector(getSidebarItems)

    const itemList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [SidebarItemsList, collapsed])

    return (
        <menu
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
                {itemList}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>
        </menu>
    )
})
