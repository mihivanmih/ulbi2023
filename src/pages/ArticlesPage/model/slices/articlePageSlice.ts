import type { PayloadAction } from '@reduxjs/toolkit'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider'
import type { Article } from 'entities/Article'
import { ArticleView } from '../../../../entities/Article'
import type { ArticlePageSchema } from '../types/articlePageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW__LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticle = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage ?? articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: { },
        page: 1,
        hasMore: true,
        view: ArticleView.SMALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW__LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: state => {
            const view = localStorage.getItem(ARTICLE_VIEW__LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action: PayloadAction<Article[]>
            ) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articlesPageSliceReducer } = articlesPageSlice
export const { actions: articlesPageSliceAction } = articlesPageSlice
