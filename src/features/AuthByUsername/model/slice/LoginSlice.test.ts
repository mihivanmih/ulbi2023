import type { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './LoginSlice'

describe('LoginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123456'),
            ),
        ).toStrictEqual({ username: '123456' })
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123456'),
            ),
        ).toStrictEqual({ password: '123456' })
    })
})
