import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input } from '@/shared/ui/redesigned/Input'
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { getAddCommentFormText } from '../../model/selectors/AddCommentFormSelectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/AddCommentFormSlice'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo(
    ({ className = '', onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation()
        const text = useSelector(getAddCommentFormText)
        // const error = useSelector(getAddCommentFormError)
        const dispatch = useAppDispatch()

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value))
            },
            [dispatch],
        )

        const obSendHandler = useCallback(() => {
            onSendComment(text ?? '')
            onCommentTextChange('')
        }, [onCommentTextChange, onSendComment, text])

        return (
            <DynamicModuleLoader reducers={reducers}>
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={
                        <Card max>
                            <HStack
                                data-testid={'AddCommentForm'}
                                justify={'between'}
                                max
                                gap={'16'}
                                className={classNames(
                                    styles.AddCommentFormRedegigned,
                                    {},
                                    [className],
                                )}
                            >
                                <Input
                                    className={styles.input}
                                    placeholder={t('Введите текст комментария')}
                                    value={text}
                                    onChange={onCommentTextChange}
                                    data-testid={'AddCommentForm.Input'}
                                />
                                <Button
                                    onClick={obSendHandler}
                                    data-testid={'AddCommentForm.Button'}
                                >
                                    {t('отправить')}
                                </Button>
                            </HStack>
                        </Card>
                    }
                    off={
                        <HStack
                            data-testid={'AddCommentForm'}
                            justify={'between'}
                            max
                            className={classNames(styles.AddCommentForm, {}, [
                                className,
                            ])}
                        >
                            <InputDeprecated
                                className={styles.input}
                                placeholder={t('Введите текст комментария')}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid={'AddCommentForm.Input'}
                            />
                            <ButtonDeprecated
                                theme={ThemeButton.OUTLINE}
                                onClick={obSendHandler}
                                data-testid={'AddCommentForm.Button'}
                            >
                                {t('отправить')}
                            </ButtonDeprecated>
                        </HStack>
                    }
                />
            </DynamicModuleLoader>
        )
    },
)

export default AddCommentForm
