import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ProfileCard } from '../../../../entities/Profile'
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { ValidateProfileError } from '../../model/consts/consts'

interface EditableProfileCardProps {
    className?: string
    id?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

    const validateErrors = useSelector(getProfileValidateErrors)
    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(
            'Серверная ошибка при сохранении',
        ),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Имя и фамилия обязательны',
        ),
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value ?? '' }))
        },
        [dispatch],
    )

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
        },
        [dispatch],
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }))
        },
        [dispatch],
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value ?? '' }))
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
        },
        [dispatch],
    )

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value ?? '' }))
        },
        [dispatch],
    )

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch],
    )

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }))
        },
        [dispatch],
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap={'8'}
                max
                className={classNames(cls.EditableProfileCard, {}, [className])}
            >
                <EditableProfileCardHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                            data-testid={'EditableProfileCard.Error'}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    error={error}
                    readonly={readonly}
                    isLoading={isLoading}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    )
})
