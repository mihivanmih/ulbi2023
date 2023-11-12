import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './CommentCard.module.scss'
import { memo } from 'react'
import type { Comment } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Text } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { getRouteProfile } from '@/shared/const/router'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className = '', comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack
                data-testid={'CommentCard.Loading'}
                gap={'8'}
                max
                className={classNames(styles.CommentCard, {}, [
                    className,
                    styles.loading,
                ])}
            >
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton
                        width={100}
                        height={16}
                        className={styles.username}
                    />
                </div>
                <Skeleton className={styles.text} width={'100%'} height={50} />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack
            data-testid={'CommentCard.Content'}
            max
            gap={'8'}
            className={classNames(styles.CommentCard, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={styles.header}
            >
                <Avatar size={30} src={comment.user.avatar} />
                <Text
                    className={styles.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text text={comment.text} className={styles.text} />
        </VStack>
    )
})
