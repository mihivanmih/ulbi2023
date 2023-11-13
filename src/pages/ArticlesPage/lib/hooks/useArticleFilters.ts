import { useSelector } from 'react-redux'
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { useCallback } from 'react'
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { articlesPageSliceAction } from '../../model/slices/articlePageSlice'
import { SortOrder } from '@/shared/types/sort'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'

export function useArticleFilters() {
    const view = useSelector(getArticlePageView)
    const sort = useSelector(getArticlePageSort)
    const order = useSelector(getArticlePageOrder)
    const search = useSelector(getArticlePageSearch)
    const type = useSelector(getArticlePageType)
    const dispatch = useAppDispatch()

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageSliceAction.setView(view))
        },
        [dispatch],
    )

    const onChangeOrder = useCallback(
        (sortOrder: SortOrder) => {
            dispatch(articlesPageSliceAction.setOrder(sortOrder))
            dispatch(articlesPageSliceAction.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageSliceAction.setSort(newSort))
            dispatch(articlesPageSliceAction.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageSliceAction.setSearch(search))
            dispatch(articlesPageSliceAction.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageSliceAction.setType(value))
            dispatch(articlesPageSliceAction.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )
    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    }
}
