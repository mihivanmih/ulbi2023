import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageSliceReducer } from '../../model/slices/articlePageSlice'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import {
    getArticlePageError
} from '../../model/selectors/articlesPageSelectors'
import { Page } from '@/widgets/Page'
import { fetchArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageSliceReducer
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

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(styles.ArticlesPage, {}, [className])}>
                {error}
                <ArticlesPageFilters />
                <ArticleInfiniteList className={styles.list}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
