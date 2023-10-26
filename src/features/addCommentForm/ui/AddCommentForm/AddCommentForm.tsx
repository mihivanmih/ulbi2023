import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import {
    // getAddCommentFormError,
    getAddCommentFormText
} from '../../model/selectors/AddCommentFormSelectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/AddCommentFormSlice'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from 'shared/ui/Stack'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className = '', onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    // const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const obSendHandler = useCallback(() => {
        onSendComment(text ?? '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack justify={'between'} max className={classNames(styles.AddCommentForm, {}, [className])}>
                <Input
                    className={styles.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={obSendHandler}
                >
                    {t('отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
