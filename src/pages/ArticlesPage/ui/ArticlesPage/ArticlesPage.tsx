import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageSliceReducer } from '../../model/slices/articlePageSlice'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { getArticlePageError } from '../../model/selectors/articlesPageSelectors'
import { Page } from '@/widgets/Page'
import { fetchArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticlePageGreeting } from '@/features/articlePageGreeting'
import { ToggleFeatures } from '@/shared/lib/features'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'
import { FiltersContainer } from '../FiltersContainer/FiltersContainer'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageSliceReducer,
}

const ArticlesPage = ({ className = '' }: ArticlesPageProps) => {
    const dispatch = useAppDispatch()
    const error = useSelector(getArticlePageError)
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchArticlesPage({}))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const content = (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={
                        <Page
                            data-testid={'ArticlesPage'}
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                styles.ArticlesPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <ArticleInfiniteList className={styles.list} />
                            <ArticlePageGreeting />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid={'ArticlesPage'}
                    onScrollEnd={onLoadNextPart}
                    className={classNames(styles.ArticlesPage, {}, [className])}
                >
                    {error}
                    <ArticlesPageFilters />
                    <ArticleInfiniteList className={styles.list} />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    )

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
