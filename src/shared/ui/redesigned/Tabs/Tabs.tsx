import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Tabs.module.scss'
import type { ReactNode } from 'react'
import { memo, useCallback } from 'react'
import { Card } from '../Card/Card'
import { Flex, FlexDirection } from '../Stack/Flex/Flex'

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
    direction?: FlexDirection
}

export const Tabs = memo((props: TabsProps) => {
    const { className = '', tabs, value, onTabClick, direction = 'row' } = props

    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab)
            }
        },
        [onTabClick],
    )

    return (
        <Flex
            gap={'8'}
            align={'start'}
            direction={direction}
            className={classNames(styles.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value
                return (
                    <Card
                        variant={isSelected ? 'light' : 'normal'}
                        className={classNames(
                            styles.tab,
                            { [styles.selected]: isSelected },
                            [],
                        )}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                        border={'round'}
                    >
                        {tab.content}
                    </Card>
                )
            })}
        </Flex>
    )
})
