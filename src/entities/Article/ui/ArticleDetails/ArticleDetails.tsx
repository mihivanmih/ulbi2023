import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleDetails.module.scss'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useEffect } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { renderArticleBlock } from './renderBlock'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { AppImage } from '@/shared/ui/redesigned/AppImage'

interface ArticleDetailsProps {
    className?: string
    id?: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData)
    return (
        <>
            <HStack justify={'center'} max className={styles.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    className={styles.avatar}
                />
            </HStack>
            <VStack gap={'4'} max data-testid={'ArticleDetails.Info'}>
                <TextDeprecated
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    className={styles.title}
                />
                <HStack gap={'8'} className={styles.articleInfo}>
                    <Icon Svg={EyeIcon} className={styles.icon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap={'8'} className={styles.articleInfo}>
                    <Icon Svg={CalendarIcon} className={styles.icon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    )
}

const Skeleton = toggleFeatures({
    name: 'isAppRedisigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
})

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData)
    return (
        <>
            <Text title={article?.title} size={'l'} bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={
                    <Skeleton width={'100%'} height={420} border={'16px'} />
                }
                src={article?.img}
                className={styles.img}
            />

            {article?.blocks.map(renderArticleBlock)}
        </>
    )
}

export const ArticleDetails = memo(
    ({ className = '', id }: ArticleDetailsProps) => {
        const { t } = useTranslation()
        const dispatch = useAppDispatch()
        const isLoading = useSelector(getArticleDetailsIsLoading)
        const error = useSelector(getArticleDetailsError)

        useEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticleById(id))
            }
        }, [dispatch, id])

        let content

        if (isLoading) {
            content = (
                <VStack max gap={'16'}>
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
                <TextDeprecated
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке статьи')}
                    align={TextAlign.CENTER}
                />
            )
        } else {
            content = (
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={<Redesigned />}
                    off={<Deprecated />}
                />
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
