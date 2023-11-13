import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import styles from '../ProfileCard/ProfileCard.module.scss'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect } from '@/entities/Country'
import { Loader } from '@/shared/ui/deprecated/Loader'
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text'

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation()

    return (
        <HStack
            justify="center"
            max
            className={classNames(styles.ProfileCard, {}, [styles.error])}
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    )
}

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify="center"
            max
            className={classNames(styles.ProfileCard, {
                [styles.loading]: true,
            })}
        >
            <Loader />
        </HStack>
    )
}

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props
    const { t } = useTranslation('profile')

    const mods: Mods = {
        [styles.editing]: !readonly,
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(styles.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max className={styles.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={styles.input}
                onChange={onChangeFirstname}
                readOnly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={styles.input}
                onChange={onChangeLastname}
                readOnly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={styles.input}
                onChange={onChangeAge}
                readOnly={readonly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('Город')}
                className={styles.input}
                onChange={onChangeCity}
                readOnly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={styles.input}
                onChange={onChangeUsername}
                readOnly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={styles.input}
                onChange={onChangeAvatar}
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
})
