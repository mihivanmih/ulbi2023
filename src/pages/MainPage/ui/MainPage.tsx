import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/PageError'
import { Counter } from 'entities/Counter'

const MyComponent = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Главная страница')}

            <BugButton />

            <Counter />

        </div>
    )
}

export default MyComponent
