import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleListItem.module.scss'
import { memo } from 'react'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { ArticleView } from '../../model/consts/consts'
import { toggleFeatures } from '@/shared/lib/features'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className = '', view = ArticleView.SMALL } = props

        const mainClass = toggleFeatures({
            name: 'isAppRedisigned',
            on: () => styles.ArticleListItemRedesigned,
            off: () => styles.ArticleListItem,
        })

        const Skeleton = toggleFeatures({
            name: 'isAppRedisigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        })
        const Card = toggleFeatures({
            name: 'isAppRedisigned',
            on: () => CardRedesigned,
            off: () => CardDeprecated,
        })

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <Card className={styles.card}>
                        <div className={styles.header}>
                            <Skeleton border={'50%'} width={30} height={30} />
                            <Skeleton
                                width={150}
                                height={16}
                                className={styles.username}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={styles.title}
                        />
                        <Skeleton
                            width={250}
                            height={24}
                            className={styles.title}
                        />
                        <Skeleton height={200} className={styles.skeletonTop} />
                        <div className={styles.skeletonFooter}>
                            <Skeleton width={200} height={36} />
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            )
        }

        return (
            <div
                className={classNames(mainClass, {}, [className, styles[view]])}
            >
                <Card className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Skeleton
                            width={225}
                            height={200}
                            className={styles.img}
                        />
                    </div>
                    <Skeleton
                        width={130}
                        height={16}
                        className={styles.infoWrapper}
                    />
                    <Skeleton
                        width={150}
                        height={16}
                        className={styles.title}
                    />
                </Card>
            </div>
        )
    },
)
