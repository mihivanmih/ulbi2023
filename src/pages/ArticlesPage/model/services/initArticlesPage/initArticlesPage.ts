import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import {
    getArticlePageInited
} from '../../selectors/articlesPageSelectors'
import { articlesPageSliceAction } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
    any,
    any,
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi

            const inited = getArticlePageInited(getState())
            if (!inited) {
                dispatch(articlesPageSliceAction.initState())
                dispatch(fetchArticlesList({
                    page: 1
                }))
            }
        }
    )
