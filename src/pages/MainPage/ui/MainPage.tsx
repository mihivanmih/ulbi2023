import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const MyComponent = () => {
    const { t } = useTranslation()

    return <Page data-testid={'MainPage'}>{t('Главная страница')}</Page>
}

export default MyComponent
