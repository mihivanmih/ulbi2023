import { getQueryParams } from './addQueryParams'

describe('addQueryParams.test', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        })
        expect(params).toEqual('?test=value')
    })
    test('test with multiple param', () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
        })
        expect(params).toEqual('?test=value&test2=value2')
    })
    test('test with undefined', () => {
        const params = getQueryParams({})
        expect(params).toEqual('?')
    })
})
