import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import type { SelectOption } from '@/shared/ui/Select'
import { Select } from '@/shared/ui/Select'
import type { SortOrder } from '@/shared/types'
import { ArticleSortField } from '../../model/consts/consts'

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

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
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

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField)
    }, [onChangeSort])

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder)
    }, [onChangeOrder])

    return (
        <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать ПО')}
                options={sortFieldOptions}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={changeOrderHandler}
                className={styles.order}
            />
        </div>
    )
})
