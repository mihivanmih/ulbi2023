import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailsPage.module.scss'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentLists } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()

    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return (
            <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text title={t('Комментарии')} className={styles.commentTitle} />
                <CommentLists isLoading={commentsIsLoading} comments={comments}/>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
