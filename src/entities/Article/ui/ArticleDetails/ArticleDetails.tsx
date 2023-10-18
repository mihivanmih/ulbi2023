import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetails.module.scss'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useEffect } from 'react'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className = '', id }: ArticleDetailsProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    // const isLoading = useSelector(getArticleDetailsIsLoading)
    const isLoading = true
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={styles.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={styles.title} width={300} height={32}/>
                <Skeleton className={styles.skeleton} width={600} height={24}/>
                <Skeleton className={styles.skeleton} width={'100%'} height={200}/>
                <Skeleton className={styles.skeleton} width={'100%'} height={200}/>
            </div>
        )
    } else if (error) {
        content = (

            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
            />
        )
    } else {
        content = (
            <div>выаываыва</div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(styles.ArticleDetails, {}, [className])}>
                { content }
            </div>
        </DynamicModuleLoader>
    )
})
