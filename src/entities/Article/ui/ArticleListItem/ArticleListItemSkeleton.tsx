import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleListItem.module.scss'
import { memo } from 'react'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'
import { ArticleView } from '../../model/consts/consts'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className = '', view = ArticleView.SMALL } = props

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(styles.ArticleListItem, {}, [
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
                            <Skeleton
                                width={150}
                                height={16}
                                className={styles.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={styles.title}
                        />
                        <Skeleton height={200} className={styles.img} />
                        <div className={styles.footer}>
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            )
        }

        return (
            <div
                className={classNames(styles.ArticleListItem, {}, [
                    className,
                    styles[view],
                ])}
            >
                <Card className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={styles.img}
                        />
                    </div>
                    <Skeleton width={130} height={16} className={styles.img} />
                    <Skeleton width={150} height={16} className={styles.img} />
                </Card>
            </div>
        )
    },
)
