import { classNames } from 'shared/lib/classNames/classNames'
import styles from './CommentLists.module.scss'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from '../../ui/CommentCard/CommentCard'
import { useTranslation } from 'react-i18next'
import type { Comment } from '../../model/types/comment'

interface CommentListsProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentLists = memo((props: CommentListsProps) => {
    const { t } = useTranslation('article-details')
    const {
        className = '',
        comments,
        isLoading
    } = props

    if (isLoading) {
        return (
            <div className={classNames(styles.CommentLists, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        )
    }

    return (
        <div className={classNames(styles.CommentLists, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        comment={comment}
                        className={styles.comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    )
})
