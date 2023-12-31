import { classNames } from '@/shared/lib/classNames/classNames'
import styles from '../ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts'
import { Text } from '@/shared/ui/deprecated/Text'
import { Icon } from '@/shared/ui/redesigned/Icon'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { ArticleTextBlock } from '../../../model/types/article'
import { Card } from '@/shared/ui/deprecated/Card'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteArticleDetails } from '@/shared/const/router'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
import { ArticleListItemProps } from '../ArticleListItem'

export const ArticleListItemDeprecated = (props: ArticleListItemProps) => {
    const { className = '', article, view = ArticleView.SMALL, target } = props

    const { t } = useTranslation()

    const types = (
        <Text text={article.type?.join(', ')} className={styles.types} />
    )
    const viewsArticle = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} />
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock

        return (
            <div
                data-testid={'ArticleListItem'}
                className={classNames(styles.ArticleListItem, {}, [
                    className,
                    styles[view],
                ])}
            >
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={styles.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={styles.date}
                        />
                    </div>
                    <Text text={article.title} className={styles.title} />
                    {types}
                    <AppImage
                        src={article.img}
                        className={styles.img}
                        alt={article.title}
                        fallback={<Skeleton width={'100%'} height={250} />}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={styles.textBlock}
                        />
                    )}
                    <div className={styles.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ThemeButton.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {viewsArticle}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink
            data-testid={'ArticleListItem'}
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(styles.ArticleListItem, {}, [
                className,
                styles[view],
            ])}
        >
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={styles.img}
                        fallback={<Skeleton width={200} height={200} />}
                    />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {viewsArticle}
                </div>
                <Text text={article.title} className={styles.title} />
            </Card>
        </AppLink>
    )
}
