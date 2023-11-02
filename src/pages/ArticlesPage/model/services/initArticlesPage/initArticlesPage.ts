import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import {
    getArticlePageInited
} from '../../selectors/articlesPageSelectors'
import { articlesPageSliceAction } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
import type { ArticleSortField, ArticleType } from '@/entities/Article'
import type { SortOrder } from '@/shared/types'

export const initArticlesPage = createAsyncThunk<
    any,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi

            const inited = getArticlePageInited(getState())
            if (!inited) {
                const orerFromUrl = searchParams.get('order') as SortOrder
                const sortFromUrl = searchParams.get('sort') as ArticleSortField
                const searchFromUrl = searchParams.get('search')
                const typeFromUrl = searchParams.get('type') as ArticleType

                if (orerFromUrl) {
                    dispatch(articlesPageSliceAction.setOrder(orerFromUrl))
                }

                if (sortFromUrl) {
                    dispatch(articlesPageSliceAction.setSort(sortFromUrl))
                }

                if (searchFromUrl) {
                    dispatch(articlesPageSliceAction.setSearch(searchFromUrl))
                }

                if (typeFromUrl) {
                    dispatch(articlesPageSliceAction.setType(typeFromUrl))
                }

                dispatch(articlesPageSliceAction.initState())
                dispatch(fetchArticlesList({}))
            }
        }
    )
