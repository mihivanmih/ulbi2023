import { Country } from '../../../../../entities/Country/model/types/country'
import { Currency } from '../../../../../entities/Currency/model/types/currency'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../consts/consts'

const data = {
    username: 'admin',
    age: 34,
    country: Country.Russia,
    lastname: 'test',
    first: 'asd',
    city: 'Moskow',
    currency: Currency.EUR,
}

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)
        console.log('result', result)
        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '' })
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, lastname: '' })
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined })
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })

    test('incorrect all', async () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    })
})
