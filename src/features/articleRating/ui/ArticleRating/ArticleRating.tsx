import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleRating.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { RatingCard } from '@/entities/Rating'
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className = '', articleId } = props
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useArticleRating({
        userId: userData?.id ?? '',
        articleId,
    })
    const [rateArticleMutation] = useRateArticle()
    const rating = data?.[0]

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                })
            } catch (e) {
                console.log(e)
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    )

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback)
        },
        [handleRateArticle],
    )

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount)
        },
        [handleRateArticle],
    )

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={classNames(styles.ArticleRating, {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('оставьте свой отзыв о статье')}
            hasFeedback
            rate={rating?.rate}
        />
    )
})

export default ArticleRating
