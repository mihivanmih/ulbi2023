import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleImageBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticleImageBlockComponentProps {
    className?: string
}

export const ArticleImageBlockComponent = ({ className = '' }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
            text
        </div>
    )
}
