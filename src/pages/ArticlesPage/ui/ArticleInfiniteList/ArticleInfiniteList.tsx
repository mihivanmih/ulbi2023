import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getArticle } from '../../model/slices/articlePageSlice'
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { ArticleList } from '@/entities/Article'
import { Text } from '@/shared/ui/deprecated/Text'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className = '' } = props

    const { t } = useTranslation()
    const articles = useSelector(getArticle.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const error = useSelector(getArticlePageError)
    const view = useSelector(getArticlePageView)

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />
    }
    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    )
})
