import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import type { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>('article/fetchArticleById', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        )

        if (!articleId) {
            throw new Error()
        }

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        console.log('error', e)
        return rejectWithValue('error')
    }
})
