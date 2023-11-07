import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from '@/widgets/Page'

interface ArticleEditPageProps {
    className?: string
}

const AdminPanelPage = memo((props: ArticleEditPageProps) => {
    const {
        className = ''
    } = props

    const { t } = useTranslation()

    return (
        <Page data-testid={'AdminPanelPage'} className={classNames('', {}, [className])}>
            {t('Админ панель')}
        </Page>
    )
})

export default AdminPanelPage
