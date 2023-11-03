import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleDetailsPage.module.scss'
import { memo } from 'react'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment'
import { ArticleRating } from '@/features/articleRating'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return null
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailPageHeader />
                    <ArticleDetails id={id}/>
                    <ArticleRating articleId={id}/>
                    <ArticleRecommendationsList />
                    <ArticleDetailsComment id={id} />
                </VStack>

            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
