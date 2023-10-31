import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '../../../../entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { getProfileFirstData } from '../../model/selectors/getProfileFirstData/getProfileFirstData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

export const EditableProfileCardHeader = memo(() => {
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
        <HStack justify={'between'} max>
            <Text title={t('Профиль')} />
            {canEdit && (
                <>
                    { readonly
                        ? (<Button
                            theme={ThemeButton.OUTLINE}
                            onClick={onEdit}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                        >
                            {t('Редактировать')}
                        </Button>)
                        : (
                            <HStack gap={'8'}>
                                <Button
                                    theme={ThemeButton.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={'EditableProfileCardHeader.CancelButton'}
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onSave}
                                    data-testid={'EditableProfileCardHeader.SaveButton'}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>

                        )
                    }
                </>
            )}
        </HStack>
    )
})
