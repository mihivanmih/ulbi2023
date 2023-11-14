import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './CommentCard.module.scss'
import { memo } from 'react'
import type { Comment } from '../../model/types/comment'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import {
    AppLink,
    AppLink as AppLinkDeprecated,
} from '@/shared/ui/redesigned/AppLink'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { getRouteProfile } from '@/shared/const/router'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className = '', comment, isLoading } = props

    const Skeleton = toggleFeatures({
        name: 'isAppRedisigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    })

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
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <Card padding={'24'} border={'round'} max>
                    <VStack
                        data-testid={'CommentCard.Content'}
                        max
                        gap={'8'}
                        className={classNames(
                            styles.CommentCardRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap={'8'}>
                                <Avatar size={30} src={comment.user.avatar} />
                                <Text
                                    title={comment.user.username}
                                    bold
                                    size={'s'}
                                />
                            </HStack>
                        </AppLink>
                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    data-testid={'CommentCard.Content'}
                    max
                    gap={'8'}
                    className={classNames(styles.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={styles.header}
                    >
                        <AvatarDeprecated size={30} src={comment.user.avatar} />
                        <TextDeprecated
                            className={styles.username}
                            title={comment.user.username}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated
                        text={comment.text}
                        className={styles.text}
                    />
                </VStack>
            }
        />
    )
})
