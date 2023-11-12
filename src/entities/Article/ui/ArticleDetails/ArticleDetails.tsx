import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleDetails.module.scss'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import {
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import { Icon } from '@/shared/ui/deprecated/Icon'
import type { ArticleBlock } from '../../model/types/article'
import { HStack, VStack } from '@/shared/ui/deprecated/Stack'
import { ArticleBlockType } from '../../model/consts/consts'
import { ArticleBlockComponent } from '../ArticleBlockComponent/ArticleBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
    className?: string
    id?: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(
    ({ className = '', id }: ArticleDetailsProps) => {
        const { t } = useTranslation()
        const dispatch = useAppDispatch()
        const isLoading = useSelector(getArticleDetailsIsLoading)
        const article = useSelector(getArticleDetailsData)
        const error = useSelector(getArticleDetailsError)

        const renderBlock = useCallback((block: ArticleBlock) => {
            switch (block.type) {
                case ArticleBlockType.CODE:
                    return (
                        <ArticleBlockComponent
                            key={block.id}
                            block={block}
                            className={styles.block}
                        />
                    )
                case ArticleBlockType.IMAGE:
                    return (
                        <ArticleImageBlockComponent
                            key={block.id}
                            block={block}
                            className={styles.block}
                        />
                    )
                case ArticleBlockType.TEXT:
                    return (
                        <ArticleTextBlockComponent
                            key={block.id}
                            block={block}
                            className={styles.block}
                        />
                    )
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
                <VStack max gap={'8'}>
                    <Skeleton
                        className={styles.avatar}
                        width={200}
                        height={200}
                        border={'50%'}
                    />
                    <Skeleton
                        className={styles.title}
                        width={300}
                        height={32}
                    />
                    <Skeleton
                        className={styles.skeleton}
                        width={600}
                        height={24}
                    />
                    <Skeleton
                        className={styles.skeleton}
                        width={'100%'}
                        height={200}
                    />
                    <Skeleton
                        className={styles.skeleton}
                        width={'100%'}
                        height={200}
                    />
                </VStack>
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
                    <HStack
                        justify={'center'}
                        max
                        className={styles.avatarWrapper}
                    >
                        <Avatar
                            size={200}
                            src={article?.img}
                            className={styles.avatar}
                        />
                    </HStack>
                    <VStack gap={'4'} max data-testid={'ArticleDetails.Info'}>
                        <Text
                            title={article?.title}
                            text={article?.subtitle}
                            size={TextSize.L}
                            className={styles.title}
                        />
                        <HStack gap={'8'} className={styles.articleInfo}>
                            <Icon Svg={EyeIcon} className={styles.icon} />
                            <Text text={String(article?.views)} />
                        </HStack>
                        <HStack gap={'8'} className={styles.articleInfo}>
                            <Icon Svg={CalendarIcon} className={styles.icon} />
                            <Text text={article?.createdAt} />
                        </HStack>
                    </VStack>
                    {article?.blocks.map(renderBlock)}
                </>
            )
        }

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
                <VStack
                    gap={'16'}
                    max
                    className={classNames(styles.ArticleDetails, {}, [
                        className,
                    ])}
                >
                    {content}
                </VStack>
            </DynamicModuleLoader>
        )
    },
)
