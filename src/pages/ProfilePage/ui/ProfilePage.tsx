import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page/Page'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>()

    return (
        <Page className={classNames('', {}, [])}>
            <VStack gap={'16'} >
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
