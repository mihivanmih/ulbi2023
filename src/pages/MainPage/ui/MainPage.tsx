import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/PageError'
import { Page } from 'widgets/Page/Page'
import { HStack } from 'shared/ui/Stack'
import { ListBox } from 'shared/ui/ListBox/ListBox'

const MyComponent = () => {
    const { t } = useTranslation()

    return (
        <Page>
            {t('Главная страница')}
            <BugButton />
            <div>sdsdsd</div>
            <div>sdsdsd</div>
            <div>sdsdsd</div>
            <HStack>
                <div>1</div>
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '32323' },
                        { value: '3', content: '44444' },
                        { value: '3', content: '44444', disabled: true }
                    ]}
                />
            </HStack>
            <div>sdsdsd</div>
            <div>sdsdsd</div>
            <div>sdsdsd</div>
        </Page>
    )
}

export default MyComponent
