import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/redesigned/Text/Text'
import { useTranslation } from 'react-i18next'
import styles from './SettingsPage.module.scss'
import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface SettingsPageProps {
    className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <Page className={classNames(styles.SettingsPage, {}, [className])}>
            <VStack gap={'16'}>
                <Text title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    )
})

export default SettingsPage
