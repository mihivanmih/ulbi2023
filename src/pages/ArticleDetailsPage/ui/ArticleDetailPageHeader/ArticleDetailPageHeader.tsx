import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailPageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/roteConfig/routeConfig'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailPageHeaderProps {
    className?: string
}

export const ArticleDetailPageHeader = memo((props: ArticleDetailPageHeaderProps) => {
    const {
        className = ''
    } = props

    const { t } = useTranslation()
    const navigate = useNavigate()

    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(RoutePath.articles_details + article?.id + '/edit')
    }, [article?.id, navigate])

    return (
        <div className={classNames(styles.ArticleDetailPageHeader, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button
                className={styles.editBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onEditArticle}
            >
                {t('Редактировать')}
            </Button>}
        </div>
    )
})