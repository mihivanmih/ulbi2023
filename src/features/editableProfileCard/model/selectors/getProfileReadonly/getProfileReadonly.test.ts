import type { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileIsLoading', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        }

        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
    })
})
