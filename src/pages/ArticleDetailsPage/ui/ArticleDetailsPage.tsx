import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailsPage.module.scss'
import { memo } from 'react'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
    return (
        <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
            Article Details
        </div>
    )
}

export default memo(ArticleDetailsPage)
