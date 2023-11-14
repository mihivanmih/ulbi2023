import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleListItemProps } from '../ArticleListItem'
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/redesigned/Text'
import styles from './ArticleListItemRedesigned.module.scss'
import { Icon } from '@/shared/ui/redesigned/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { ArticleTextBlock } from '../../../model/types/article'
import { Card } from '@/shared/ui/redesigned/Card'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteArticleDetails } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

export const ArticleListItemRedesigned = (props: ArticleListItemProps) => {
    const { className = '', article, view = ArticleView.SMALL, target } = props

    const { t } = useTranslation()

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
        </>
    )
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={styles.views} />
        </HStack>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock

        return (
            <Card
                padding={'24'}
                max
                data-testid={'ArticleListItem'}
                className={classNames(styles.ArticleListItem, {}, [
                    className,
                    styles[view],
                ])}
            >
                <VStack max gap={'16'}>
                    <HStack gap={'8'} max>
                        {userInfo}
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text bold text={article.title} />
                    <Text size={'s'} text={article.subtitle} />
                    <AppImage
                        src={article.img}
                        className={styles.img}
                        alt={article.title}
                        fallback={<Skeleton width={'100%'} height={250} />}
                    />
                    {textBlock.paragraphs && (
                        <Text
                            className={styles.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify={'between'}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant={'outline'}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        )
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(styles.ArticleListItem, {}, [
                className,
                styles[view],
            ])}
        >
            <Card className={styles.card} border="round">
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    alt={article.title}
                    src={article.img}
                    className={styles.img}
                />
                <VStack className={styles.info} gap="4">
                    <Text title={article.title} className={styles.title} />
                    <VStack gap="4" className={styles.footer} max>
                        <HStack justify="between" max>
                            <Text
                                text={article.createdAt}
                                className={styles.date}
                            />
                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    )
}
