import type { PayloadAction } from '@reduxjs/toolkit'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider'
import type { Article } from 'entities/Article'
import { ArticleView } from 'entities/Article'
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
        view: ArticleView.SMALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW__LOCALSTORAGE_KEY, action.payload)
        },
        initState: state => {
            state.view = localStorage.getItem(ARTICLE_VIEW__LOCALSTORAGE_KEY) as ArticleView
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
                articlesAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articlesPageSliceReducer } = articlesPageSlice
export const { actions: articlesPageSliceAction } = articlesPageSlice
