import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from '../../../../../entities/Country'
import { Currency } from '../../../../../entities/Currency'

const data = {
    id: '1',
    username: 'admin',
    age: 34,
    country: Country.Russia,
    lastname: 'test',
    first: 'asd',
    city: 'Moskow',
    currency: Currency.EUR
}

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
