import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
}

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [])}>
                {t('PROFILE pAGE')}000
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
