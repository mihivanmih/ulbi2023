import type { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../consts/consts'

describe('getProfileValidateErrors', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        }

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.SERVER_ERROR,
        ])
    })
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        )
    })
})
