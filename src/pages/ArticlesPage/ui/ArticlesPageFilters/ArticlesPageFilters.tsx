import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
    getArticlePageOrder, getArticlePageSearch,
    getArticlePageSort, getArticlePageType,
    getArticlePageView
} from '../../model/selectors/articlesPageSelectors'
import type { ArticleView, ArticleSortField } from 'entities/Article'
import { articlesPageSliceAction } from '../../model/slices/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticleTypeTabs, ArticleViewSelector } from 'entities/Article'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector'
import type { SortOrder } from 'shared/types'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import type { ArticleType } from 'entities/Article/model/types/article'

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlePageView)
    const sort = useSelector(getArticlePageSort)
    const order = useSelector(getArticlePageOrder)
    const search = useSelector(getArticlePageSearch)
    const type = useSelector(getArticlePageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageSliceAction.setView(view))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeOrder = useCallback((sortOrder: SortOrder) => {
        dispatch(articlesPageSliceAction.setOrder(sortOrder))
        dispatch(articlesPageSliceAction.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageSliceAction.setSort(newSort))
        dispatch(articlesPageSliceAction.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageSliceAction.setSearch(search))
        dispatch(articlesPageSliceAction.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageSliceAction.setType(value))
        dispatch(articlesPageSliceAction.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(styles.ArticlesPageFilters, {}, [])}>
            <div className={styles.sortWrapper}>

                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />

                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={styles.search}>
                <Input placeholder={t('Поиск')} onChange={onChangeSearch} value={search} />
            </Card>

            <ArticleTypeTabs
                className={styles.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    )
})
