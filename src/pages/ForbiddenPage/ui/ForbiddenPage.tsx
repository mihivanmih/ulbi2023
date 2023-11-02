import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'

interface NotFoundPageProps {
    className?: string
}

export const ForbiddenPage = ({ className = '' }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <Page className={classNames('', {}, [className])}>
            {t('У вас нет доступа к этой странице')}
        </Page>
    )
}