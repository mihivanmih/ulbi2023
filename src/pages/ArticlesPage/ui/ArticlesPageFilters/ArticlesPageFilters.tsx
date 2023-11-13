import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticlesPageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'

import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation()

    const {
        view,
        onChangeView,
        onChangeSort,
        sort,
        onChangeSearch,
        search,
        onChangeType,
        type,
        onChangeOrder,
        order,
    } = useArticleFilters()

    return (
        <div className={classNames(styles.ArticlesPageFilters, {}, [])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />

                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={styles.search}>
                <Input
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>

            <ArticleTypeTabs
                className={styles.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    )
})
