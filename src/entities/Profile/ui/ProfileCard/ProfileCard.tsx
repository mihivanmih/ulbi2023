import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileFirstData } from 'entities/Profile/model/selectors/getProfileFirstData/getProfileFirstData'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className = '' }: ProfileCardProps) => {
    const { t } = useTranslation('profile')

    const data = useSelector(getProfileFirstData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('Профиль')} />
                <Button theme={ThemeButton.OUTLINE} className={styles.editBtn}>
                    {t('Редактировать')}
                </Button>
                {error && <div>{isLoading}</div>}
                <div className={styles.data} >
                    <Input
                        value={data?.first}
                        placeholder={t('Ваше имя')}
                        className={styles.input}
                    />
                    <Input
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        className={styles.input}
                    />
                </div>

            </div>
        </div>
    )
}
