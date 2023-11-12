import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleTypeTabs.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import type { TabItem } from '@/shared/ui/deprecated/Tabs'
import { Tabs } from '@/shared/ui/deprecated/Tabs'
import { ArticleType } from '@/entities/Article'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className = '', value, onChangeType } = props

    const { t } = useTranslation()

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    )

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType)
        },
        [onChangeType],
    )

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames(styles.ArticleTypeTabs, {}, [className])}
        />
    )
})
