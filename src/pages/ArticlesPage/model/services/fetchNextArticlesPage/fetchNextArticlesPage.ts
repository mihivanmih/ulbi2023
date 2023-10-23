import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum
} from '../../selectors/articlesPageSelectors'
import { articlesPageSliceAction } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'

export const fetchArticlesPage = createAsyncThunk<
    any,
    any,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi
            const hasMore = getArticlePageHasMore(getState())
            const page = getArticlePageNum(getState())
            const isLoading = getArticlePageIsLoading(getState())

            if (hasMore && !isLoading) {
                dispatch(articlesPageSliceAction.setPage(page + 1))
                dispatch(fetchArticlesList({
                    page: page + 1
                }))
            }
        }
    )
