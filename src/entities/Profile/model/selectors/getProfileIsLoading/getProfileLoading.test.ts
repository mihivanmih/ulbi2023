import type { StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
