import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const ProfilePage = () => {
    const { t } = useTranslation('profile')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <Text text={t('Профиль не найден')} />
    }

    return (
        <Page className={classNames('', {}, [])}>
            <VStack gap={'16'} >
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
