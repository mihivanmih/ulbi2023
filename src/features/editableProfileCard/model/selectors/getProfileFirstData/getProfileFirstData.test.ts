import type { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileFirstData } from './getProfileFirstData'
import { Country } from '../../../../../entities/Country'
import { Currency } from '../../../../../entities/Currency'

describe('getProfileFirstData', () => {
    test('should return counter value', () => {
        const data = {
            username: 'admin',
            age: 34,
            country: Country.Russia,
            lastname: 'test',
            first: 'asd',
            city: 'Moskow',
            currency: Currency.EUR
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }

        expect(getProfileFirstData(state as StateSchema)).toEqual(data)
    })
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileFirstData(state as StateSchema)).toEqual(undefined)
    })
})
