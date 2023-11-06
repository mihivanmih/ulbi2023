import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleDetailPageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from '@/entities/Article'
import { HStack } from '@/shared/ui/Stack'
import { RoutePath } from '@/shared/const/router'

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
        <HStack max justify={'between'} className={classNames(styles.ArticleDetailPageHeader, {}, [className])}>
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
        </HStack>
    )
})
