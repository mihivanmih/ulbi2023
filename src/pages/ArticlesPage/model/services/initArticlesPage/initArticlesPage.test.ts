import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { initArticlesPage } from './initArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { useSearchParams } from 'react-router-dom'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const [searchParams] = useSearchParams()
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false
            }
        })
        await thunk.callThunk(searchParams)
        expect(thunk.dispatch).toBeCalledTimes(4)
    })
    test('initArticlesPage not called', async () => {
        const [searchParams] = useSearchParams()
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true
            }
        })
        await thunk.callThunk(searchParams)
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })
})
