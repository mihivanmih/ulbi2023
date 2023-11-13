import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticlesFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleSortField, ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sort'
import { Input } from '@/shared/ui/redesigned/Input'

interface ArticlesFiltersProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
    type: ArticleType
    onChangeType: (type: ArticleType) => void
    search: string
    onChangeSearch: (value: string) => void
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className = '',
        sort,
        onChangeSort,
        onChangeSearch,
        search,
        onChangeType,
        onChangeOrder,
        order,
        type,
    } = props

    const { t } = useTranslation()

    return (
        <Card
            className={classNames(styles.ArticlesFilters, {}, [className])}
            padding={'24'}
        >
            <VStack gap={'32'}>
                <Input
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleTypeTabs
                    className={styles.tabs}
                    value={type}
                    onChangeType={onChangeType}
                />
            </VStack>
        </Card>
    )
})
