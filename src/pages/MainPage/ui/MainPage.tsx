import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/PageError'
import { Page } from 'widgets/Page/Page'

const MyComponent = () => {
    const { t } = useTranslation()

    return (
        <Page>
            {t('Главная страница')}
            <BugButton />
        </Page>
    )
}

export default MyComponent
