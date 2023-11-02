import { EditableProfileCard } from './EditableProfileCard'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Profile } from '@/entities/Profile'
import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { $api } from '@/shared/api/api'

const profile: Profile = {
    id: '1',
    age: 23,
    lastname: 'admin',
    country: Country.Russia,
    first: 'admin',
    currency: Currency.EUR,
    city: 'Moscow',
    username: 'asdmmm123'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: {
                id: '1',
                username: 'asdmmm123'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('feature/EditableProfileCard', () => {
    test('EditableProfileCard edit', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })
    test('EditableProfileCard cancel', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
    })
    test('EditableProfileCard error', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })
    test('EditableProfileCard save', async () => {
        const mockPutReq = jest.spyOn($api, 'put')

        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        expect(mockPutReq).toHaveBeenCalled()
    })
})
