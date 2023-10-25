import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { Article } from 'entities/Article'
import { ArticleType } from '../../../../../entities/Article'
import {
    getArticlePageLimit,
    getArticlePageNum,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { addQueryParams } from 'shared/lib/hooks/url/addQueryParams/addQueryParams'

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi
            const limit = getArticlePageLimit(getState())
            const sort = getArticlePageSort(getState())
            const order = getArticlePageOrder(getState())
            const search = getArticlePageSearch(getState())
            const page = getArticlePageNum(getState())
            const type = getArticlePageType(getState())

            try {
                addQueryParams({
                    sort, order, search, type
                })
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _order: order,
                        _sort: sort,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type
                    }
                })

                if (!response.data) {
                    throw new Error()
                }

                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
