import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '../../../../entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { getProfileFirstData } from '../../model/selectors/getProfileFirstData/getProfileFirstData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'

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
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <Card padding={'24'} max border={'partial'}>
                    <HStack justify={'between'} max>
                        <Text title={t('Профиль')} />
                        {canEdit && (
                            <>
                                {readonly ? (
                                    <Button
                                        variant={'outline'}
                                        onClick={onEdit}
                                        color={'success'}
                                        data-testid={
                                            'EditableProfileCardHeader.EditButton'
                                        }
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <HStack gap={'8'}>
                                        <Button
                                            variant={'outline'}
                                            onClick={onCancelEdit}
                                            color={'error'}
                                            data-testid={
                                                'EditableProfileCardHeader.CancelButton'
                                            }
                                        >
                                            {t('Отменить')}
                                        </Button>

                                        <Button
                                            variant={'outline'}
                                            onClick={onSave}
                                            data-testid={
                                                'EditableProfileCardHeader.SaveButton'
                                            }
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <HStack justify={'between'} max>
                    <TextDeprecated title={t('Профиль')} />
                    {canEdit && (
                        <>
                            {readonly ? (
                                <ButtonDeprecated
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onEdit}
                                    data-testid={
                                        'EditableProfileCardHeader.EditButton'
                                    }
                                >
                                    {t('Редактировать')}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap={'8'}>
                                    <ButtonDeprecated
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                        data-testid={
                                            'EditableProfileCardHeader.CancelButton'
                                        }
                                    >
                                        {t('Отменить')}
                                    </ButtonDeprecated>

                                    <ButtonDeprecated
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onSave}
                                        data-testid={
                                            'EditableProfileCardHeader.SaveButton'
                                        }
                                    >
                                        {t('Сохранить')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </>
                    )}
                </HStack>
            }
        />
    )
})
