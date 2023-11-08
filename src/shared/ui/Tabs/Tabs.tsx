import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Tabs.module.scss'
import type { ReactNode } from 'react'
import { memo, useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const { className = '', tabs, value, onTabClick } = props

    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab)
            }
        },
        [onTabClick],
    )

    return (
        <div className={classNames(styles.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    className={styles.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})
