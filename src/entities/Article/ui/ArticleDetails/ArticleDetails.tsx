import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetails.module.scss'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import type { ArticleBlock } from '../../model/types/article'
import { ArticleBlockType } from '../../model/types/article'
import { ArticleBlockComponent } from 'entities/Article/ui/ArticleBlockComponent/ArticleBlockComponent'
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'

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
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = useCallback(
        (block: ArticleBlock) => {
            switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleBlockComponent key={block.id} block={block} className={styles.block}/>
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} block={block} className={styles.block}/>
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} block={block} className={styles.block}/>
            default:
                return null
            }
        }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
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
            <>
                <div className={styles.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={styles.avatar}
                    />
                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    className={styles.title}
                />
                <div className={styles.articleInfo}>
                    <Icon Svg={EyeIcon} className={styles.icon}/>
                    <Text text={String(article?.views)}/>
                </div>
                <div className={styles.articleInfo}>
                    <Icon Svg={CalendarIcon} className={styles.icon}/>
                    <Text text={article?.createdAt}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
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
