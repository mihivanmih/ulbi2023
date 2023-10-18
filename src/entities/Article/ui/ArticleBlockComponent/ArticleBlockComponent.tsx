import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticleBlockComponentProps {
    className?: string
}

export const ArticleBlockComponent = ({ className = '' }: ArticleBlockComponentProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.ArticleBlockComponent, {}, [className])}>
            text
        </div>
    )
}
