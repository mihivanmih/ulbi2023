import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import styles from './ArticleRecommendationsList.module.scss'
import { memo } from 'react'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { ArticleList } from '@/entities/Article'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useArticleRecommendationsList } from '../../api/ArticleRecommendationsApi'
import { ToggleFeatures } from '@/shared/lib/features'

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
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={<Text title={t('Рекомендуем')} size={'l'} />}
                    off={
                        <TextDeprecated
                            title={t('Рекомендуем')}
                            className={styles.commentTitle}
                            size={TextSize.L}
                        />
                    }
                />

                <ArticleList articles={articles} target={'_blank'} />
            </VStack>
        )
    },
)
