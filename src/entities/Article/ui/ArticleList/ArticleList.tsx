import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecadet, TextSize } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import styles from './ArticleList.module.scss'
import type { HTMLAttributeAnchorTarget } from 'react'
import { memo } from 'react'
import type { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { useTranslation } from 'react-i18next'
import { ArticleView } from '../../model/consts/consts'
import { ToggleFeatures } from '@/shared/lib/features'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean
}

const getAkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={styles.card}
                view={view}
                key={index}
            />
        ))

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation()
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(styles.ArticleList, {}, [
                    className,
                    styles[view],
                ])}
            >
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={<Text size={'l'} title={t('Статьи не найдены')} />}
                    off={
                        <TextDeprecadet
                            size={TextSize.L}
                            title={t('Статьи не найдены')}
                        />
                    }
                />
            </div>
        )
    }

    return (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <HStack
                    wrap={'wrap'}
                    gap={'16'}
                    data-testid={'ArticleList'}
                    className={classNames(styles.ArticleListRedesigned, {}, [])}
                >
                    {articles.map((item) => (
                        <ArticleListItem
                            article={item}
                            view={view}
                            className={styles.card}
                            key={item.id}
                            target={target}
                        />
                    ))}
                    {isLoading && getAkeletons(view)}
                </HStack>
            }
            off={
                <div
                    data-testid={'ArticleList'}
                    className={classNames(styles.ArticleList, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    {articles.map((item) => (
                        <ArticleListItem
                            article={item}
                            view={view}
                            className={styles.card}
                            key={item.id}
                            target={target}
                        />
                    ))}
                    {isLoading && getAkeletons(view)}
                </div>
            }
        />
    )
})
