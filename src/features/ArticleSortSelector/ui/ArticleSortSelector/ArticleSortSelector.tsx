import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import type { SelectOption } from '@/shared/ui/Select'
import { Select } from '@/shared/ui/Select'
import type { SortOrder } from '@/shared/types'
import { ArticleSortField } from '@/entities/Article'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className = '',
        sort,
        onChangeSort,
        order,
        onChangeOrder
    } = props

    const { t } = useTranslation()

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ], [t])

    return (
        <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                label={t('Сортировать ПО')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                className={styles.order}
            />
        </div>
    )
})
