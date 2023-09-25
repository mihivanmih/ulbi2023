import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/PageError'

const MyComponent = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Главная страница')}

            <BugButton />

        </div>
    )
}

export default MyComponent
