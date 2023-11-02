import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from '@/widgets/PageError'
import { Page } from '@/widgets/Page/Page'

const MyComponent = () => {
    const { t } = useTranslation()

    return (
        <Page>
            {t('Главная страница')}
            <BugButton />
            <div>sdsdsd</div>
            <div>sdsdsd</div>
            <div>sdsdsd</div>
            <div>sdsdsd</div>
            <div>sdsdsd</div>
            <div>sdsdsd</div>
        </Page>
    )
}

export default MyComponent
