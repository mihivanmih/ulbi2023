import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './CommentLists.module.scss'
import { memo } from 'react'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { CommentCard } from '../../ui/CommentCard/CommentCard'
import { useTranslation } from 'react-i18next'
import type { Comment } from '../../model/types/comment'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'

interface CommentListsProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentLists = memo((props: CommentListsProps) => {
    const { t } = useTranslation('article-details')
    const { className = '', comments, isLoading } = props

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                max
                className={classNames(styles.CommentLists, {}, [className])}
            >
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        )
    }

    return (
        <VStack
            gap={'16'}
            max
            className={classNames(styles.CommentLists, {}, [className])}
        >
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={<Text text={t('Комментарии отсутствуют')} />}
                    off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
                />
            )}
        </VStack>
    )
})
