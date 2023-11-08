import type { StateSchema } from '@/app/providers/StoreProvider'
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './articleDetails'

describe('getArticle selectors', () => {
    test('getArticleDetailsData', () => {
        const data = {
            id: '1',
            title: 'title',
        }

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        }

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })

    test('getArticleDetailsIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('getArticleDetailsIsLoading false', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
    })

    test('getArticleDetailsError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'true',
            },
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('true')
    })

    test('getArticleDetailsError false', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})
