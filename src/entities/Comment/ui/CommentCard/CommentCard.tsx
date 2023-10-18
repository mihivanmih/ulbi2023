import { classNames } from 'shared/lib/classNames/classNames'
import styles from './CommentCard.module.scss'
import { memo } from 'react'
import type { Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className = '',
        comment,
        isLoading
    } = props

    if (isLoading) {
        return (
            <div className={classNames(styles.CommentCard, {}, [className])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton width={100} height={16} className={styles.username}/>
                </div>
                <Skeleton className={styles.text} width={'100%'} height={50} />
            </div>
        )
    }

    return (
        <div className={classNames(styles.CommentCard, {}, [className])}>
            <div className={styles.header}>
                <Avatar size={30} src={comment.user.avatar}/>
                <Text className={styles.username} title={comment.user.username}/>
            </div>
            <Text text={comment.text} className={styles.text} />
        </div>
    )
})
