import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text'
import { Input, TypeButton } from '@/shared/ui/Input'
import type { Profile } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar'
import type { Country } from '@/entities/Country'
import type { Currency } from '@/entities/Currency'
import { CurrencySelect } from '../../../../entities/Currency'
import { CountrySelect } from '../../../../entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className = '',
        data,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        isLoading,
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(
                    styles.ProfileCard,
                    { [styles.loading]: true },
                    [className],
                )}
            >
                <Loader />
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(styles.ProfileCard, {}, [
                    className,
                    styles.error,
                ])}
            >
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [styles.editing]: !readonly,
    }

    return (
        <VStack
            gap={'16'}
            max
            className={classNames(styles.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify={'center'} max>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}

            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={styles.input}
                onChange={onChangeFirstname}
                readOnly={readonly}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={styles.input}
                onChange={onChangeLastname}
                readOnly={readonly}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                value={data?.age}
                type={TypeButton.NUMBER}
                placeholder={t('Ваша возраст')}
                className={styles.input}
                onChange={onChangeAge}
                readOnly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={styles.input}
                onChange={onChangeCity}
                readOnly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ваш ссылку на аватар')}
                className={styles.input}
                onChange={onChangeAvatar}
                readOnly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Ваш никнейм')}
                className={styles.input}
                onChange={onChangeUsername}
                readOnly={readonly}
            />
            <CurrencySelect
                className={styles.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={styles.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    )
}
