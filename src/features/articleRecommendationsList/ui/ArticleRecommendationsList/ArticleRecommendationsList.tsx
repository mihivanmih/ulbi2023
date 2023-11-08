import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import styles from './ArticleRecommendationsList.module.scss'
import { memo } from 'react'
import { Text, TextSize } from '@/shared/ui/Text'
import { ArticleList } from '@/entities/Article'
import { VStack } from '@/shared/ui/Stack'
import { useArticleRecommendationsList } from '../../api/ArticleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3)
        const { t } = useTranslation()

        console.log(articles)

        if (isLoading ?? error ?? !articles) {
            return null
        }

        return (
            <VStack
                data-testid={'ArticleRecommendationsList'}
                gap={'8'}
                className={classNames(styles.ArticleRecommendationsList, {}, [
                    className,
                ])}
            >
                <Text
                    title={t('Рекомендуем')}
                    className={styles.commentTitle}
                    size={TextSize.L}
                />
                <ArticleList articles={articles} target={'_blank'} />
            </VStack>
        )
    },
)
