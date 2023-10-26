import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import { ArticleList } from 'entities/Article'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageSliceReducer, getArticle } from '../../model/slices/articlePageSlice'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useDispatch, useSelector } from 'react-redux'
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'widgets/Page/Page'
import { fetchArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageSliceReducer
}

const ArticlesPage = ({ className = '' }: ArticlesPageProps) => {
    const dispatch = useDispatch()
    const articles = useSelector(getArticle.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const error = useSelector(getArticlePageError)
    const view = useSelector(getArticlePageView)
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchArticlesPage({}))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(styles.ArticlesPage, {}, [className])}>
                {error}

                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={styles.list}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
