import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { ProfileRating } from '@/features/profileRating'

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return null
    }

    return (
        <Page data-testid={'ProfilePage'} className={classNames('', {}, [])}>
            <VStack gap={'16'}>
                <EditableProfileCard id={id} />
            </VStack>
            <VStack>
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
