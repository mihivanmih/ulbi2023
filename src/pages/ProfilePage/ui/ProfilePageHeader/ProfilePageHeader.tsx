import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileFirstData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className = '' }: ProfilePageHeaderProps) => {
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileFirstData)

    const canEdit = authData?.id === profileData?.id

    const readonly = useSelector(getProfileReadonly)

    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={styles.btnWrapper}>
                    { readonly
                        ? (<Button
                            theme={ThemeButton.OUTLINE}
                            className={styles.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>)
                        : (
                            <>
                                <Button
                                    theme={ThemeButton.OUTLINE_RED}
                                    className={styles.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button
                                    theme={ThemeButton.OUTLINE}
                                    className={styles.saveBtn}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>

                        )
                    }
                </div>
            )}
        </div>
    )
}
