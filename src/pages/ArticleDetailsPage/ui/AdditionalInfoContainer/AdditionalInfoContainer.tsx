import { memo, useCallback } from 'react'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { Card } from '@/shared/ui/redesigned/Card'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import styles from './AdditionalInfoContainer.module.scss'
import { useNavigate } from 'react-router-dom'
import { getRouteArticleEdit } from '@/shared/const/router'

interface AdditionalInfoContainerProps {
    className?: string
}

export const AdditionalInfoContainer = memo(
    (props: AdditionalInfoContainerProps) => {
        const { className = '' } = props
        const article = useSelector(getArticleDetailsData)
        const navigate = useNavigate()
        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id))
            }
        }, [article, navigate])
        if (!article) {
            return null
        }

        return (
            <Card padding={'24'} border={'round'} className={styles.card}>
                <ArticleAdditionalInfo
                    onEdit={onEditArticle}
                    className={className}
                    author={article.user}
                    createAt={article.createdAt}
                    views={article.views}
                />
            </Card>
        )
    },
)
