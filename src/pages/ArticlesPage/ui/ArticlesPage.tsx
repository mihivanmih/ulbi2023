import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import type { ArticleView } from 'entities/Article'
import { ArticleList, ArticleViewSelector } from 'entities/Article'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageSliceAction, articlesPageSliceReducer, getArticle } from '../model/slices/articlePageSlice'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView
} from '../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'

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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageSliceAction.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchArticlesPage({}))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(articlesPageSliceAction.initState())
        dispatch(fetchArticlesList({
            page: 1
        }))
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(styles.ArticlesPage, {}, [className])}>
                {error}
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
