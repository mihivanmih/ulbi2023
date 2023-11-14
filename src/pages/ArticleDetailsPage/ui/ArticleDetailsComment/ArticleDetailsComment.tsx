import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleDetailsComment.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, Suspense } from 'react'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { AddCommentForm } from '@/features/addCommentForm'
import { CommentLists } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { ToggleFeatures } from '@/shared/lib/features'

interface ArticleDetailsCommentProps {
    className?: string
    id?: string
}

export const ArticleDetailsComment = memo(
    (props: ArticleDetailsCommentProps) => {
        const { className = '', id } = props

        const { t } = useTranslation()

        const dispatch = useAppDispatch()
        const comments = useSelector(getArticleComments.selectAll)
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text))
            },
            [dispatch],
        )

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id))
        })

        return (
            <VStack
                max
                gap={'16'}
                className={classNames(styles.ArticleDetailsComment, {}, [
                    className,
                ])}
            >
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={<Text title={t('Комментарии')} size={'l'} />}
                    off={
                        <TextDeprecated
                            title={t('Комментарии')}
                            className={styles.commentTitle}
                            size={TextSize.L}
                        />
                    }
                />

                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentLists
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        )
    },
)
