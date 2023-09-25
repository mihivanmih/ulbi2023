import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed, test: true, test2: false }, [className])}>
            <Button onClick={onToggle}>**</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}
