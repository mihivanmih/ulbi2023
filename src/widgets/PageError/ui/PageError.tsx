import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '@/shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className = '' }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ThemeButton.OUTLINE} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
