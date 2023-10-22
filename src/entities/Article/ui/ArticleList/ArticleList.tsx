import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleList.module.scss'
import { memo } from 'react'
import type { Article } from '../../model/types/article'
import { ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getAkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={styles.card} view={view} key={index}/>
    ))

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL
    } = props

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={styles.card}
            key={article.id}
        />
    )

    if (isLoading) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                { getAkeletons(view) }
            </div>
        )
    }

    return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
        </div>
    )
})
